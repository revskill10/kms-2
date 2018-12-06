import Link from './link'

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link as="/" href="www/index">
          Home
        </Link>
      </li>
      <li>
        <Link as="/about" href="www/about">
          About
        </Link>
      </li>
      <li>
        <Link as='/first-page' href="blog/hello-world/index.html">First Blog post</Link>
      </li>
      <li>
        <Link as="/blog" href="blog/archives/index.html">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar