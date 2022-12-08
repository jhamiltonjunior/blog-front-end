import React from "react"
// import { FeaturedPosts } from "../sections/index"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Categories from "../components/categories"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      {/* <Categories categories={categories} /> */}
      <Seo seo={homepage.attributes.seo} />

      <div className="container mx-auto px-10 mb-8">
        <div className="">
          <div className="lg:col-span-8 col-span-1">
            {/* <h1>{homepage.attributes.hero.title}</h1> */}
            <Articles articles={articles} />
          </div>

          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <Categories categories={categories} />
            </div>
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
