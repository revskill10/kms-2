import React from 'react'
import { withRouter } from 'next/router'

class MyLink extends React.Component {
  componentDidMount() {
    const { router, link } = this.props
    router.prefetch(link)
  }

  render() {
    const { router, children } = this.props

    return (
      <a onClick={() => setTimeout(() => router.push(link), 100)}>
        {children}
      </a>
    )
  }
}

export default withRouter(MyLink)