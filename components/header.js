import React from "react"
import Link from "next/link"
import { useEffect, useState } from "react"

const Header = ({ categories }) => {
  return (
    <header className="flex-wrap items-center px-2 text-lg backdrop-blur-md transition-transform ease-in-out md:px-0">
      <nav className="2xl:container flex justify-between items-center mx-auto container">
        <div className="block">
          <ul>
            <li>
              <Link href="/" passHref>
                <div className="cursor-pointer font-bold text-4xl dark:text-white">
                  Hamilton
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <button
          id="theme-toggle"
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          <svg
            id="theme-toggle-dark-icon"
            className="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            className="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          // className="flex cursor-pointer justify-between items-center lg:flex lg:w-auto lg:order-1"
          className="md:flex items-center space-x-1"
        >
          <ul
            className="flex p-4 mt-4 text-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
            // flex mt-4 font-medium justify-between lg:flex-row lg:space-x-8 lg:mt-0 hidden w-full md:block md:w-auto
          >
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`} passHref>
                    <div className="py-2 pl-3 pr-4 text-black rounded hidden md:block hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      {category.attributes.name}
                    </div>
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
