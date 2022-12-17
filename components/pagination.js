import React from "react"
import { useRouter } from "next/router"

const Pagination = ({ page, articles }) => {
  const router = useRouter()
  const lastPage = articles.length

  return (
    <div className="flex items-center justify-center">
      <nav
        className="my-10 isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <button
          onClick={() => router.push(`/?page=${page - 1}`)}
          disabled={page <= 1}
          className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2"
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
          <span>Prev</span>
        </button>

        <button
          onClick={() => router.push(`/?page=${page + 1}`)}
          disabled={page >= lastPage}
          className="relative inline-flex items-center rounded-r-md border border-gray-300 text-gray-500 bg-white px-2 py-2 text-sm font-medium  hover:bg-gray-50 focus:z-20"
        >
          <span>Next</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
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
