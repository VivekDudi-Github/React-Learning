import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 

function MyTata(){
    return (
        <div>Tata Mahindera !</div>
    )
}

const reactElement = React.createElement(
    'a' ,
    { href:'https://google.com' , target:"_blank"} ,
    'clickme to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
     <>
     
     <App/>
    {reactElement}
     </>
    
)
