import Header from "./header"

const Layout = ({ children, categories, seo }) => (
  <>
    <Header categories={categories} />
    <main className="container mx-auto px-10 mb-8">{children}</main>
  </>
)

export default Layout
