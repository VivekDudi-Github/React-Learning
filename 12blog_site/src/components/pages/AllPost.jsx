import React , {useState  , useEffect} from 'react'
import service from '../../appwrite/conf'
import { Postcard  , Container} from '../index'

function AllPost() {
    
    const [posts , setPosts] = useState([])

       useEffect (() =>{ service.getPosts([]).then((data)=>{
            if (data){
               
                setPosts(data.documents)
                } else { console.log('error no data found')}
            })

        }, []) 

    return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>        
                    {posts.map((post)=> 
                        <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard {...post}/>
                            </div>
                    )}
            </div>
        </Container>
    </div>
)
}

export default AllPost