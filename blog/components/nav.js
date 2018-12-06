import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <Link prefetch={pathname !== '/'} href='/' className={pathname === '/' ? 'is-active' : ''}>
      Home
    </Link>
    <Link prefetch={pathname !== '/about'} href='/about' className={pathname === '/about' ? 'is-active' : ''}>
      About
    </Link>
    <a href='/hello-world' className={pathname === '/first-page' ? 'is-active' : ''}>
      First Page
    </a>
    <a href='/archives' className={pathname === '/archives' ? 'is-active' : ''}>
      News
    </a>
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