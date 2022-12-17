import React from "react"
import Card from "./card"
import Pagination from "./pagination"

const Articles = ({ articles }) => {
  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {articles.map((article, i) => {
          return <Card article={article} key={article.attributes.slug} />
        })}
      </div>
      {/* <Pagination /> */}
    </div>
  )
}

export default Articles
