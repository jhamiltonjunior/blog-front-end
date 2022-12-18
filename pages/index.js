import React from "react"
// import { FeaturedPosts } from "../sections/index"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Categories from "../components/categories"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Header from "../components/header"
import Pagination from "../components/pagination"

const Home = ({ articles, categories, homepage, page, articlesLength }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      {/* className="grid grid-cols-1 lg:grid-cols-12 gap-12" */}
      {/* <h1>{homepage.attributes.hero.title}</h1> */}
      <Articles articles={articles} />
      <Pagination
        page={page}
        articles={articles}
        articlesLength={articlesLength}
      />
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  let articlesLength = await fetchAPI("/articles", { populate: "*" })

  const maxArticlePerPage = 2

  articlesLength = Math.round(articlesLength.data.length / maxArticlePerPage) //ok

  const start = +page === 1 ? 0 : +maxArticlePerPage
  console.log(start)

  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", {
      populate: "*",
      pagination: { limit: maxArticlePerPage, start },
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
      articlesLength,
      revalidate: 1,
    },
  }
}

export default Home
