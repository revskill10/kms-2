import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <Link href='www/index' as='/' className={pathname === '/' ? 'is-active' : ''}>
      Home
    </Link>
    <Link as='/about' href='www/about' className={pathname === '/about' ? 'is-active' : ''}>
      About
    </Link>
    <Link as='/hello-world' href='blog/hello-world' className={pathname === '/first-page' ? 'is-active' : ''}>
      First Page
    </Link>
    <Link as='/archives' href='blog/archives' className={pathname === '/archives' ? 'is-active' : ''}>
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