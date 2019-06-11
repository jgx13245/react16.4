import React from 'react'
import { Button,Input,List } from 'antd';

const TodoListUi = (props) => {
  return (
    <div>
        <div>
          <Input 
            placeholder="输入信息" 
            style={{width:'300px',marginRight:'10px'}} 
            value = {props.inputValue}
            onChange={props.handleChangeInputValue}
            />
          <Button type="primary" onClick={props.handleSubmit}>Primary</Button>
        </div>
        <List
          style={{width:'400px',marginTop:'20px'}}
          bordered
          size="small"
          dataSource={props.inputList}
          renderItem={(item,index) => (<List.Item onClick={(index) => {props.handleDelete(index)}}>{item}</List.Item>)}
        />
      </div>      
  )
}

// class TodoListUi extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//         <div>
//         <div>
//           <Input 
//             placeholder="输入信息" 
//             style={{width:'300px',marginRight:'10px'}} 
//             value = {props.inputValue}
//             onChange={props.handleChangeInputValue}
//             />
//           <Button type="primary" onClick={props.handleSubmit}>Primary</Button>
//         </div>
//         <List
//           style={{width:'400px',marginTop:'20px'}}
//           bordered
//           size="small"
//           dataSource={props.inputList}
//           renderItem={(item,index) => (<List.Item onClick={(index) => {props.handleDelete(index)}}>{item}</List.Item>)}
//         />
//       </div>      
//     )
//   }
// }


export default TodoListUi