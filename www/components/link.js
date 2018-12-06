import Link from 'next/link'
//import mkLink from 'next-routes-middleware/get-client-link'
//import config from '../now.json'
//const getClientLink = mkLink(config)

const NextLink = ({href, className, as, children, ...rest}) => {
  //const as = getClientLink(href)
  return (
    <Link href={href} as={as} {...rest}>
      <a className={className} href={as}>{children}</a>
    </Link>
  )
}

export default NextLink
