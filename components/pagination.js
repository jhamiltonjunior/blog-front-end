import React from "react"
import { useRouter } from "next/router"

const Pagination = ({ page, articles, articlesLength }) => {
  const router = useRouter()
  const lastPage = Math.ceil(articles.length / 2)

  return (
    <div className="flex items-center justify-center">
      <nav
        className="w-80 my-10 isolate flex items-center justify-between -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <button
          onClick={() => router.push(`/?page=${page - 1}`)}
          aria-label="Retornar"
          aria-disabled={page <= 1 ? true : false}
          disabled={page <= 1}
          className={`dark:text-white dark:bg-[#111111] dark:border-[#111111] dark:shadow-lg relative rounded-full inline-flex items-center border border-gray-300 bg-white px-3 py-3 text-sm font-medium text-black-500 hover:bg-gray-50 focus:z-20 ${
            page <= 1 ? "opacity-0" : ""
          }`}
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <span className="dark:text-white">
          Página {`${page} de ${articlesLength}`}
        </span>
        <button
          onClick={() => router.push(`/?page=${page + 1}`)}
          aria-label="Avançar"
          aria-disabled={page >= articlesLength ? true : false}
          disabled={page >= articlesLength}
          className={`relative rounded-full inline-flex items-center border border-gray-300 dark:text-white dark:shadow-lg text-black-500 dark:bg-[#111111] dark:border-[#111111] bg-white px-3 py-3 text-sm font-medium hover:bg-gray-50 focus:z-20 ${
            page >= articlesLength ? "opacity-0" : ""
          }`}
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </nav>
    </div>
  )
}

export default Pagination
