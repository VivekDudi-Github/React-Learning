import { useState, useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setlength] = useState(8) ;
  const [num, setNumbers] = useState(false) ;
  const [characters, setCharacter] = useState(false) ;
  const [password , setpassword] = useState("")



  const passwordGen = useCallback(
    ()=>{
      let pass = "" ;
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;
      if(num){
        str += "0123456789" ;
      }
      if(characters){
        str += ",./<>?:;{}[])(@!$%^&*-+*" ;
      }
      for ( let i = 1 ; i <= length ; i++){
        let char = Math.floor(Math.random() * str.length+1) ;
        pass += str.charAt(char) ;
      } 
      
      setpassword(pass)  
    } 
    , [length , num , characters , setpassword ])
    
    useEffect(()=>{passwordGen()} ,[length , num ,characters , passwordGen])

const passRef = useRef(null) ;

let copyPasstoClip = useCallback(() => {
  passRef.current?.select();
  passRef.current?.setSelectionRange(0,15) 
  window.navigator.clipboard.writeText(password) 
  
} , [password])

  return (
    <>

    <div  className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 pb-2 text-orange-500 bg-gray-800 text-center'>
      Password Generator
        <div className='flex shadow rounded-lg overflow-hidden m-3  '>
        <input type = "text"
          value={password}
          className='outline-none w-full py-1 px-3' 
          placeholder='password'
          readOnly 
          ref = {passRef}
        />
        <button className='bg-slate-500' onClick={copyPasstoClip} >COPY</button>
        
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" min={8} max={15} onChange={(e)=>{setlength(e.target.value)}} className='cursor-pointer' 
             />

             <label >Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={num} onChange={(e)=>{ setNumbers((prev) => !prev )
            }} />
            <label>Numbers</label>
          </div>
        
        <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={characters} onChange={(e)=>{ setCharacter((prev) => !prev )
            }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
