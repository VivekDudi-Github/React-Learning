import React , {useState , useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'



function Protected({children , authentication = true}) {
    //TODO make it more easy 

    
    const navigate = useNavigate()
    const [loader , setLoader] = useState(true)
    const authstatus = useSelector(state => state.auth.status)

    useEffect(()=> {
        
        if(authentication && authstatus !== authentication ){
            navigate("/login")
            console.log("/login statement");
        }else if (!authentication && authstatus !== authentication ){
            navigate ("/")
            console.log("/statement");
        }
        setLoader(false)

    } , [authstatus , navigate , authentication])
   
    return (
        loader ? <h1>Loading</h1> : <h1>{children}</h1>
  )
}

export default Protected