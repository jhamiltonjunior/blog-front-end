import Footer from "./footer"
import Header from "./header"

const Layout = ({ children, categories, seo }) => (
  <div className="dark:bg-[#111111]">
    <Header categories={categories} />
    <main className="mx-auto px-4 max-w-screen-xl min-h-screen">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
