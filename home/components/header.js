import Link from './link'

const Header = () => {
  return (
  <header>
    <Link href={'/'} local>Home</Link>
    <Link href={'/about'}>About</Link>
    <Link href={'/hello-world'}>Hello World</Link>
    <Link href={'/archives'}>Archives</Link>
    <Link href={'/slides/lesson1'}>Lesson 1</Link>
    <Link href={'/slides/lesson2'}>Lesson 2</Link>
    <Link href={'/slides/lesson3'}>Lesson 3</Link>
  </header>
)}

export default Header
