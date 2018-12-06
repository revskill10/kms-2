import Link from './link'

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/" as="/index">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" as="/about">
          About
        </Link>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
    </ul>
  </nav>
)

export default NavBar