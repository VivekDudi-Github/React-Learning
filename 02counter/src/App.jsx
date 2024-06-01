import {useState} from 'react' 

import './App.css'


function App(){
    
  let [counter,setcounter] = useState(15)

let Add_btn = ()=> {
  if (counter <20){
  setcounter(counter + 1)
  }else{setcounter(counter)}
}
let Remove_btn = ()=> {
  if(counter == 0){
    setcounter(counter)
  }else{
  setcounter(counter-1)}
}

  return (
    <>
    <h1> The React Counter</h1>
    <h2>counter value: {counter}</h2>
    
    <button onClick={Add_btn}>Add value</button>
    <button onClick = {Remove_btn}>Decrease value</button>   
    </>
  )
}
export default App

