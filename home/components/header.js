import { withRouter } from 'next/router'

const goto = (as) => e => {
  e.preventDefault()
  setTimeout(() => window.location.href = as, 100)
}

const Header = ({ router }) => {
  const { pathname } = router
  return (
  <header>
    <a href='/' onClick={goto('/')} className={pathname === '/' ? 'is-active' : ''}>Home</a>
    <a href='/about' onClick={goto('/about')}  href='/about' className={pathname === '/about' ? 'is-active' : ''}>About</a>
    <a href='/hello-world' onClick={goto('/hello-world')} className={pathname === '/hello-world' ? 'is-active' : ''}>Hello world</a>
    <a href='/archives' onClick={goto('/archives')} className={pathname === '/archives' ? 'is-active' : ''}>News</a>
    <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
        hover: cursor;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
)}

export default withRouter(Header)