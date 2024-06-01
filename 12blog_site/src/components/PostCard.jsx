import React from 'react'
import service from "../appwrite/conf"
import {Link}  from 'react-router-dom'

function PostCard({$id , title , featuredImage}) {
 
  const fileId = featuredImage 
 

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-black rounded-xl p-10 shadow-lg shadow-gray-600 hover:scale-110 duration-200'>
          
            <div className='w-full justify-center mb-4'>
                <img src= {service.getFilePreview(fileId)} alt={title} />
            </div>
            <h2 
            className='text-xl font-bold text-white'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard