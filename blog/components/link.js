import Link from 'next/link'
//import mkLink from 'next-routes-middleware/get-client-link'
//import config from '../now.json'
//const getClientLink = mkLink(config)

const NextLink = ({href, className, as, children, ...rest}) => {
  //const as = getClientLink(href)
  return (
    <Link href={href} as={href} {...rest}>
      <a className={className} href={href}>{children}</a>
    </Link>
  )
}

export default NextLink
