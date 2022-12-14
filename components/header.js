import React from "react"
import Link from "next/link"

const Header = ({ categories }) => {
  return (
    <header className="bg-white dark:bg-gray-800 border-gray-200 lg:px-6 mx-auto py-2 px-10 mb-8">
      <nav className="flex flex-wrap justify-between items-center mx-auto">
        <div className="block">
          <ul>
            <li>
              <Link href="/">
                <a className="cursor-pointer font-bold text-4xl .white-mode">
                  Hamilton Dev
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="flex cursor-pointer justify-between items-center lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex mt-4 font-medium justify-between lg:flex-row lg:space-x-8 lg:mt-0">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="block py-2 pr-4 pl-3  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
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
