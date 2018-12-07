import App from '../components/app'
import Header from '../components/header'
import ErrorMessage from '../components/error-message'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const testQuery = gql`
  query{
    sche_ages{
      id
      age_name
      from_month
      to_month
    }
  }
`
const Age = ({sche_age: {id, age_name, from_month, to_month}}) => {
  return (
    <div>
      id: {id}
      name: {age_name}
      from month: {from_month}
      to month: {to_month}
    </div>
  )
}

const AgeList = ({sche_ages}) => {
  return sche_ages.map(item => {
    return <Age sche_age={item} key={item.id} />
  })
}

export default () => (
  <App>
    <Header />
    Home page
    <Query query={testQuery}>
      {({loading, error, data: {sche_ages}}) => {
        if (error) return <ErrorMessage message='Error loading posts.' />
        if (loading) return <div>Loading</div>

        return <AgeList sche_ages={sche_ages} />
      }}
    </Query>
  </App>
)
