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

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="max-w-screen-lg mx-auto px-10 mb-8">
        <div
          className="text-center px-10 "
          data-src={imageUrl}
          data-srcset={imageUrl}
          data-uk-img
        >
          <h1>{article.attributes.title}</h1>
        </div>

        <div className="my-10">
          <p className="uk-margin-remove-bottom text-slate">
            By {article.attributes.author.data.attributes.name}
          </p>
          <p className="text-slate-100">
            <Moment format="MMM Do YYYY">
              {article.attributes.published_at}
            </Moment>
          </p>
        </div>
        <div className="text-center mb-8 text-3xl">
          <NextImage image={article.attributes.image} />
        </div>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {article.attributes.content}
        </ReactMarkdown>
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
