import Link from 'next/link'
import mkLink from 'next-routes-middleware/get-client-link'
import config from '../routes.json'
const getClientLink = mkLink(config)

const NextLink = ({href, className, children, ...rest}) => {
  const as = getClientLink(href)
  return (
    <Link href={as} as={href} {...rest}>
      <a className={className} href={as}>{children}</a>
    </Link>
  )
}

export default NextLink
