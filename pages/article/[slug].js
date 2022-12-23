import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import rehypeRaw from "rehype-raw"

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image)

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  function LinkRenderer(props) {
    return (
      <a href={props.href} title={props.title} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    )
  }

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="max-w-screen-custom mx-auto md:px-10 mb-8 mt-10">
        <div className="">
          <h1 className="">{article.attributes.title}</h1>
        </div>

        <div className="my-10 flex justify-center">
          <p className="text-blue-700 text-bold">
            {article.attributes.author.data.attributes.name}
          </p>
          <span className="text-gray-400 mx-2">•</span>
          <p className="text-blue-700 text-bold">
            <Moment format="MMMM D, YYYY">
              {article.attributes.publishedAt}
            </Moment>
          </p>
        </div>
        <div className="text-center mb-8 text-3xl">
          <NextImage image={article.attributes.image} className="rounded-lg" />
        </div>
        <article>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{ a: LinkRenderer }}
          >
            {article.attributes.content}
          </ReactMarkdown>
        </article>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  })
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  }
}

export default Article
