import Link from './link'

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about">
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