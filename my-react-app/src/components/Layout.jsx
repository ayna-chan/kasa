import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import '../styles/_layout.scss'

function Layout() {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
