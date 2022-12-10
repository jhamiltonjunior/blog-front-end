import React from "react"
// import { FeaturedPosts } from "../sections/index"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Categories from "../components/categories"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Header from "../components/header"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="container mx-auto">
        <div className="">
          {/* className="grid grid-cols-1 lg:grid-cols-12 gap-12" */}
          <div className="flex m-4 lg:flex lg:flex-wrap p-4 md:w-1/3">
            {/* <h1>{homepage.attributes.hero.title}</h1> */}
            <Articles articles={articles} />
          </div>
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
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
    },
    revalidate: 1,
  }
}

export default Home
