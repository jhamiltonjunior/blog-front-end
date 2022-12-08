import React from "react"
import Link from "next/link"
import Moment from "react-moment"
import NextImage from "./image"

const Card = ({ article }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <NextImage
          image={article.attributes.image}
          className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>

      <Link href={`/article/${article.attributes.slug}`} passHref>
        <h2 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          {article.attributes.title}
        </h2>
      </Link>

      {/* {console.log(article.attributes.title)} */}

      <div className="text-center font-medium text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline mr-2 text-pink-500"
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

      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {article.attributes.description}
      </p>
      <div className="text-center">
        <Link href={`/article/${article.attributes.slug}`} passHref>
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>

      <div className="uk-cardbody">
        <p id="category" className="uk-text-uppercase">
          {article.attributes.category.name}
        </p>
        {/* {console.log(article.attributes)} */}
        {/* <p id="title" className="uk-text-large">
              {article.attributes.title}
            </p> */}
      </div>
    </div>
  )
}

export default Card
