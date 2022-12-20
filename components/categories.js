import React from "react"
import Link from "next/link"

const Categories = ({ categories }) => {
  return (
    <div>
      <nav className="shadow-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
        {categories.map((category, index) => {
          return (
            <Link key={index} href={`/category/${category.attributes.slug}`}>
              <a className="cursor-pointer block border-b pb-3 mb-3">
                {category.attributes.name}
              </a>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Categories
