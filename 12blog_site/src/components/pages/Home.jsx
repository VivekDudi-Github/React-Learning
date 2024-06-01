import React , {useEffect , useState} from 'react'
import service  from '../../appwrite/conf'
import {Container , Postcard}  from '../index'
import { useSelector } from 'react-redux'

function Home() {
    const loginStatus = useSelector((state) => state.auth.status )

    const [Posts, setpost] = useState([])

    useEffect(() => {
        service.getPosts().then ((posts) => {
            if(posts){
                setpost(posts.documents)
            }
    })
        
    } , [])
    
    

    if ( loginStatus){
        return (
             <div className='w-full py-8'>
                    <Container>
                     <div className='flex flex-wrap' >
                    {Posts.map((post) => 
                        <div key={post.$id} className='p-2' >
                            <Postcard {...post}/>
                        </div>
                    )}
                    </div>
                    </Container>
                </div> 
        )
    }else{
        return (
            <h1>Login To See All Posts</h1>
        )
    }
}


export default Home