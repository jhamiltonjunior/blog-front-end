import React from "react"
// import { FeaturedPosts } from "../sections/index"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Categories from "../components/categories"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Header from "../components/header"
import Pagination from "../components/pagination"

const Home = ({ articles, categories, homepage, page }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      {/* className="grid grid-cols-1 lg:grid-cols-12 gap-12" */}
      {/* <h1>{homepage.attributes.hero.title}</h1> */}
      <Articles articles={articles} />
      <Pagination page={page} articles={articles} />
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * 3

  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", {
      populate: "*",
      pagination: { limit: 3, start },
    }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      page: +page,
      revalidate: 1,
    },
  }
}

export default Home
