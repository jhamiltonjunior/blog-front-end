import Header from "./header"

const Layout = ({ children, categories, seo }) => (
  <>
    <Header categories={categories} />
    {children}
  </>
)

export default Layout
