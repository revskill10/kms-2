import App from '../components/app'
import Header from '../components/header'
import ErrorMessage from '../components/error-message'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const testQuery = gql`
  query {
    hello
  }
`
export default () => (
  <App>
    <Header />
    Home page
    <Query query={testQuery}>
      {({loading, error, data: {hello}}) => {
        if (error) return <ErrorMessage message='Error loading posts.' />
        if (loading) return <div>Loading</div>

        return <div>{hello}</div>
      }}
    </Query>
  </App>
)
