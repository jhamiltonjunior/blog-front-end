import React from "react"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import { useRouter } from "next/router"
import Layout from "../../components/layout"
import Card from "../../components/card"
import Articles from "../../components/articles"

function Blog({ articles, page, categories, homepage }) {
  const router = useRouter()
  console.log(articles.length)

  const lastPage = articles.length

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <Articles articles={articles} />

      <div mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
        <button
          onClick={() => router.push(`/blog?page=${page - 1}`)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => router.push(`/blog?page=${page + 1}`)}
          disabled={page >= lastPage}
        >
          Next
        </button>
      </div>
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
    },
    // revalidate: 1,
  }
}

// export async function getStaticProps() {
//     // Run API calls in parallel
//     const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
//       fetchAPI("/articles", { populate: "*" }),
//       fetchAPI("/categories", { populate: "*" }),
//       fetchAPI("/homepage", {
//         populate: {
//           hero: "*",
//           seo: { populate: "*" },
//         },
//       }),
//     ])

//     return {
//       props: {
//         articles: articlesRes.data,
//         categories: categoriesRes.data,
//         homepage: homepageRes.data,
//       },
//       revalidate: 1,
//     }
//   }

export default Blog
