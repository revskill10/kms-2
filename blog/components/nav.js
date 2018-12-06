import Link from './link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <a href='/' className={pathname === '/' ? 'is-active' : ''}>
      Home
    </a>
    <a href='/about' className={pathname === '/about' ? 'is-active' : ''}>
      About
    </a>
    <Link prefetch={pathname !== '/first-page'} href='/first-page' className={pathname === '/first-page' ? 'is-active' : ''}>
      First Page
    </Link>
    <Link prefetch={pathname !== '/news'} href='/news' className={pathname === '/news' ? 'is-active' : ''}>
      News
    </Link>
    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
)

export default withRouter(Header)