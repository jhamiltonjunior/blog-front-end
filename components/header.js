import React from "react"
import Link from "next/link"

const Header = ({ categories }) => {
  return (
    <header className="container mx-auto px-10 mb-8">
      <nav className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <ul className="">
            <li>
              <Link href="/">
                <a className="cursor-pointer font-bold text-4xl .white-mode">
                  Hamilton Dev
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:float-left md:contents">
          <ul>
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="md:float-right mt-2 align-middle .white-mode ml-4 font-semibold cursor-pointer">
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
