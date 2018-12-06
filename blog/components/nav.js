import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <Link href='/' passHref>
      <a href='/' className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>
    <Link href='/about' passHref>
      <a href='/about' className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
    <Link href='/first-page' passHref>
      <a href='/first-page' className={pathname === '/first-page' ? 'is-active' : ''}>First Page</a>
    </Link>
    <Link href='/archives' passHref>
      <a href='/archives' className={pathname === '/archives' ? 'is-active' : ''}>News</a>
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