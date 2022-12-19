import { fetchAPI } from "../lib/api"

const { default: Layout } = require("../components/layout")

const notFound = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <h1 className="text-center">Parece que algo de errado não está certo!</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const categoriesRes = await fetchAPI("/categories", { populate: "*" })

  return {
    props: {
      categories: categoriesRes.data,
    },
    revalidate: 1,
  }
}

export default notFound
