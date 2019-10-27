import React,{useState} from 'react';
import InputNumber from './input/input'

function App(){
  const [value,setValue] = useState('aaa')
  return (
    <div>
      {/*受控组件*/}
      <InputNumber size='middle' suffix="sousuo" value={value} onChange={e=>{
        // console.log(e.target.value)
        setValue( e.target.value )
      }}/>
      <br />
      {/*非受控组件*/}
      <InputNumber size='small' prefix="sousuo" defaultValue={value} onChange={e=>{}}/>
    </div>
  )
}

export default App;
