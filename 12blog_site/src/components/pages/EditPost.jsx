import React , {useEffect , useState} from 'react'
import {Container , Postform} from '../index'
import Service  from '../../appwrite/conf'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EditPost() {
    const [post , setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=> {
      if(slug){ 
        Service.getPost(slug).then((post) => {
          if(post){
            setPost(post)
          }
        })
      }else {
        navigate('/')
      }
    } ,[slug , navigate])

    return post ? (
      <div className='py-8'>
        <Container>
          <Postform post={post}/>
        </Container>
      </div>
    ) : null
}

export default EditPost