import Link from 'next/link'

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
        <Link href='/first-page'>First Blog post</Link>
      </li>
      <li>
        <Link href="/news">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar