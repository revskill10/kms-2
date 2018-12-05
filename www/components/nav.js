import Link from './link'

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          Home
        </Link>
      </li>
      <li>
        <Link prefetch href="/about">
          About
        </Link>
      </li>
      <li>
        <a href='/first-page' >First Blog post</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
    </ul>
  </nav>
)

export default NavBar