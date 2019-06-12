import React from 'react';
import { connect } from 'react-redux'
import './style.css'

const Todolist = (props) => {
  const { inputList,inputValue, handleChangeInput, handelAddItem, handleDelete} = props
  return(
    <div>
      <div>
        <input type="text" value={inputValue} onChange={handleChangeInput}/>
        <button onClick={handelAddItem}>提交</button>
      </div>
      <ul>
        {
          inputList.map((item,index) => {
            return <li key={index} onClick={(index) => {handleDelete(index)}}>
             <span>{index}</span>
            {item}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
   inputValue:state.inputValue,
   inputList:state.inputList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeInput(e) {
      const action = {
        type:'change_input_value',
        value:e.target.value
      }
      dispatch(action)
    },
    handelAddItem() {
      const action = {
        type:'add_item',
      }
      dispatch(action)
    },
    handleDelete(index) {
      console.log(index)
      console.log('------------------')
      const action = {
        type:'delete_item',
        value:index
      }
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Todolist)