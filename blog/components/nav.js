import Link from './link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <Link prefetch href='/' className={pathname === '/' ? 'is-active' : ''}>
      Home
    </Link>
    <Link prefetch href='/about' className={pathname === '/about' ? 'is-active' : ''}>
      About
    </Link>
    <Link prefetch href='/first-page' className={pathname === '/first-page' ? 'is-active' : ''}>
      First Page
    </Link>
    <Link prefetch href='/news' className={pathname === '/news' ? 'is-active' : ''}>
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