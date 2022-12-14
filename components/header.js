import React from "react"
import Link from "next/link"

const Header = ({ categories }) => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-gray-200 lg:px-6 mx-auto py-2 px-10 mb-8 w-full trasition ease-in-out duration-500">
      <nav className="2xl:container flex flex-wrap justify-between items-center mx-auto">
        <div className="block">
          <ul>
            <li>
              <Link href="/" passHref>
                <div className="cursor-pointer font-bold text-4xl .white-mode">
                  Hamilton Dev
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div
          // className="flex cursor-pointer justify-between items-center lg:flex lg:w-auto lg:order-1"
          className="md:flex items-center space-x-1"
        >
          <ul
            className="flex p-4 mt-4 border border-gray-100 rounded-lg text-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            // flex mt-4 font-medium justify-between lg:flex-row lg:space-x-8 lg:mt-0 hidden w-full md:block md:w-auto
          >
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      {category.attributes.name}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
