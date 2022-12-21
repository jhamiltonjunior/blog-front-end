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
        <div className="text-center px-10">
          <h1>{article.attributes.title}</h1>
        </div>

        <div className="my-10 flex justify-center">
          <p>
            By{" "}
            <span className="text-[#695AA6] text-bold">
              {article.attributes.author.data.attributes.name}
            </span>
          </p>
          <span className="text-gray-400 mx-2">•</span>
          <p className="text-[#695AA6] text-bold">
            <Moment format="MMMM D, YYYY">
              {article.attributes.publishedAt}
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
