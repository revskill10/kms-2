import Link from './link'

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/" as="www/index">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" as="www/about">
          About
        </Link>
      </li>
      <li>
        <Link href='/first-page' as="blog/hello-world/index.html">First Blog post</Link>
      </li>
      <li>
        <Link href="/blog" as="blog/archives/index.html">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar