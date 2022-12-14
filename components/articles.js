import React from "react"
import Card from "./card"

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)

  return (
    <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {leftArticles.map((article, i) => {
        return (
          <Card
            article={article}
            key={`article__left__${article.attributes.slug}`}
          />
        )
      })}
      {rightArticles.map((article, i) => {
        return (
          <Card
            article={article}
            key={`article__left__${article.attributes.slug}`}
          />
        )
      })}
    </div>
  )
}

export default Articles
