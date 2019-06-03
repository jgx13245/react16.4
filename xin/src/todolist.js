import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Button,Input,List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <div>
          <Input placeholder="输入信息" style={{width:'300px',marginRight:'10px'}}/>
          <Button type="primary">Primary</Button>
        </div>
        <List
          style={{width:'400px',marginTop:'20px'}}
          bordered
          size="small"
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>      
    )
  }
}

export default TodoList