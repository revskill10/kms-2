import Router, { withRouter } from 'next/router'

const goto = (as, local) => e => {
  e.preventDefault()
  setTimeout(() => {
    if (local) {
      Router.push(as)
    } else {
      window.location.href = as
    }
  }, 100)
}

const Link = ({ router, href, children, local = false }) => {
  const { pathname } = router
  return (
  <header>
    <a href={href} onClick={goto(href, local)} className={pathname === href ? 'is-active' : ''}>{children}</a>
    <style jsx>{`
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

export default withRouter(Link)