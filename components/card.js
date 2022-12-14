import React from "react"
import Link from "next/link"
import Moment from "react-moment"
import Image from "next/image"
import NextImage from "./image"

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="w-auto bg-white shadow-lg rounded-lg px-0 transition duration-500 ease transform hover:-translate-y-1 grid content-between">
        <div className="relative overflow-hidden text-center mb-6 rounded-t-lg w-full object-cover">
          <NextImage image={article.attributes.image} />
        </div>

        <div className="px-10">
          <p className="">{article.attributes.category.data.attributes.name}</p>
        </div>

        <h2 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-blue-400 text-3xl font-semibold">
          {article.attributes.title}
        </h2>

        {/* {console.log(article.attributes.title)} */}

        <div className="text-center font-medium text-gray-700 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            <Moment format="MMM DD YYYY">
              {article.attributes.published_at}
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
