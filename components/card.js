import React from "react"
import Link from "next/link"
import Moment from "react-moment"
import NextImage from "./image"

const Card = ({ article }) => {
  const setColor = (id) => {
    if (id === 1) {
      return "text-pink-600"
    }
    if (id === 2) {
      return "text-red-600"
    }
    if (id === 3) {
      return "text-indigo-600"
    }
    if (id === 4) {
      return "text-purple-600"
    }
    if (id === 5) {
      return "text-blue-600"
    }
    if (id === 6) {
      return "text-indigo-600"
    }
    if (id === 7) {
      return "text-cyan-600"
    }
    if (id === 8) {
      return "text-rose-600"
    }
  }

  return (
    <Link href={`/article/${article.attributes.slug}`} legacyBehavior>
      <a className="w-auto dark:bg-[#111111] bg-white shadow-lg rounded-lg px-0 transition duration-500 ease transform hover:-translate-y-1 grid content-between">
        <div className="relative overflow-hidden text-center mb-6 rounded-t-lg w-full object-cover">
          <NextImage image={article.attributes.image} />
        </div>
        <div
          className={`px-6 mb-2 text-xs ${setColor(
            article.attributes.category.data.id
          )}`}
        >
          <p className={`${setColor(article.attributes.category.data.id)}`}>
            {article.attributes.category.data.attributes.name}
          </p>
        </div>

        <h2 className="px-6 transition duration-700 mb-8 cursor-pointer hover:text-blue-400 text-2xl font-normal dark:text-white">
          {article.attributes.title}
        </h2>

        {/* {console.log(article.attributes.title)} */}

        <div className="px-6 text-xs text-gray-700 mb-3.5">
          <span className="align-middle dark:text-white">
            <Moment format="MMMM D, YYYY">
              {article.attributes.publishedAt}
            </Moment>
          </span>
        </div>

        {/* <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8 md:truncate">
          {article.attributes.description}
        </p> */}
        {/* <div className="text-center">
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-gray-800 hover:bg-blue-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </div> */}
      </a>
    </Link>
  )
}

export default Card
