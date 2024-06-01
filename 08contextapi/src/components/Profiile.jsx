import React ,{useContext} from "react";
import UserContext from "./context/usercontext";

function Profile (){
    const {user} = useContext(UserContext)

    
    if(!user){ return <div>Please Enter Username</div>}
    else if(user){return <div> Welcome {user.username}</div>}

}

export default Profile 