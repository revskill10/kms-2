import Link from 'next/link'

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <a href="/">
          Home
        </a>
      </li>
      <li>
        <a href="/about">
          About
        </a>
      </li>
      <li>
        <Link as='/first-page' href="/blog/hello-world/index.html">First Blog post</Link>
      </li>
      <li>
        <Link as="/blog" href="/blog/archives/index.html">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar