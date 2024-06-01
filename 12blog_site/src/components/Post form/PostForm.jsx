import React , {useCallback, useEffect ,useId } from 'react'
import {useForm} from "react-hook-form"
import {Btn , Input , Select} from "../index"
import Service  from '../../appwrite/conf'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {RTE} from '../index'



function PostForm({post}) {
    const {register , handleSubmit , watch , setValue , control , getValues } = useForm({
        defaultValues: {
            title: post?.titile || '' ,  
            slug : post?.slug || '' ,
            content: post?.content || '' , 
            status: post?.status || 'active' 
        }})
        console.log(post)
        const navigate = useNavigate()
        const userData = useSelector(state => state.auth.userData)
       

        const userid = userData.$id

    const Submit = async (data) => {
        if(post){
        const File = data.image[0] ? await Service.uploadFile(data.image[0]): null
            
        if (File) {
          Service.deleteFile(post.featuredImage)
           
          
        }
        if(data.title === undefined || data.title === null || data.title === ""){
            data.title = post.title
        }
      
            const upPost = await Service.updatePost(post.$id, {
                ...data,
                title : data.title , 
                featuredImage: File ? File.$id : post.featuredImage  ,
                userId: post.$id ,
            });
       
           if ( upPost) {
                navigate(`/post/${upPost.$id}`)
             } 
        
         //
    }else { 
      
     
        const File = await Service.uploadFile(
             data.image[0] 
       
        )
        if (File){
            
            const newPost = await Service.createPost({...data,
                featuredImage: File.$id 
                ,  userId:userid || userData.userData.$id});
            
            if(newPost) {
                navigate(`/post/${newPost.$id}`)
            }
        }
    }
}
    
    const slugTransform =  useCallback((value) => {
        if (value && typeof value === 'string' ) {
         return value
            .trim()
            .toLowerCase()
            // .replace(/^[a-zA-z\d]+/g, '_')
            //.replace(/(?<!^)[^\w\s]+/g, '_')
            .replace(/(?<!^)\s+|[^\w\s]+/g, '_')

            
        } return value
    } , [] )

    useEffect(()=> {
        const subscription = watch( (value , {name} )=> {
            if (name === 'title') {
                setValue('slug' , slugTransform(value.title , 
                    {shouldValidate: true}
                ))
            }
        })

        return ()=> {
            subscription.unsubscribe()
        }
    } , [watch, slugTransform , setValue])


    return (
        <form onSubmit={handleSubmit(Submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                
                {...register("title", { required: true })}
               
            />
            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />
            {post && (
                <div className="w-full mb-4">
                    <img
                        src={Service.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg"
                    />
                </div>
            )}
            <Select
                options={["active" , "inactive"] }
                label="Status"
                className="mb-4"
                {...register("status", { required: true })}
            />
            <Btn type='Submit' bgColor={post ? "bg-green-500" : undefined} className="w-full">
                {post ? "Update" : "New Post"}
            </Btn>
        </div>
    </form>
  )
}

export default PostForm

