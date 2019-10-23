
import logo from './logo.svg';
import React, { Component,useState  } from 'react'

 class InputNumber extends Component{
 constructor(props){
  super(props);
 }
 render(){
  const {value,defaultValue,onChange} = this.props;
  return(
   <div>
    <input value={value} placeholder={defaultValue} onChange={(e)=>onChange(e)}/>
   </div>
  )
 }
 }  

function App(){
    const [value,setValue] = useState('aaa');
 const [value1,setValue1] = useState('bbb');
    return (
        <div>
        <InputNumber value={value} onChange={e=>setValue(e.target.value)}/>
        <InputNumber defaultValue={value1} onChange={e=>setValue1(e.target.value)}/>
        </div>
    )
}

export default App