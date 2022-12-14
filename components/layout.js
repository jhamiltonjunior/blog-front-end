import Header from "./header"

const Layout = ({ children, categories, seo }) => (
  <>
    <Header categories={categories} />
    <main className="mx-auto px-10 max-w-screen-xl">{children}</main>
  </>
)

export default Layout
