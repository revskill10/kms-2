import App from '../components/app'
import Header from '../components/header'
import ErrorMessage from '../components/error-message'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

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
    <div style={{ marginTop: 100 }}>
      <Form layout='horizontal'>
        <FormItem
          label='Input Number'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber size='large' min={1} max={10} style={{ width: 100 }} defaultValue={3} name='inputNumber' />
          <a href='#'>Link</a>
        </FormItem>

        <FormItem
          label='Switch'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Switch defaultChecked name='switch' />
        </FormItem>

        <FormItem
          label='Slider'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Slider defaultValue={70} />
        </FormItem>

        <FormItem
          label='Select'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select size='large' defaultValue='lucy' style={{ width: 192 }} name='select'>
            <Option value='jack'>jack</Option>
            <Option value='lucy'>lucy</Option>
            <Option value='disabled' disabled>disabled</Option>
            <Option value='yiminghe'>yiminghe</Option>
          </Select>
        </FormItem>

        <FormItem
          label='DatePicker'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker name='startDate' />
        </FormItem>
        <FormItem
          style={{ marginTop: 48 }}
          wrapperCol={{ span: 8, offset: 8 }}
        >
          <Button size='large' type='primary' htmlType='submit'>
          OK
          </Button>
          <Button size='large' style={{ marginLeft: 8 }}>
          Cancel
          </Button>
        </FormItem>
      </Form>
    </div>
  </App>
)
