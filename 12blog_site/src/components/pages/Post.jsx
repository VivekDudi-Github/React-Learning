import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../../appwrite/conf";
import { Btn, Container } from "../index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    // const [userDataforId , setUserDataforId ]= useState()

    let [IsLoadingUserID , setIsLoadingUserID] = useState( true )

    const [isAuthor , setisAuthor] = useState(false)

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {setPost(post)}
                else {navigate("/");}
            })
        } else navigate("/");
    }, [slug, navigate]);

    
    useEffect(()=> {
      if(post && userData){
        const userIdfromPost = post.userId ;
        const userIdfromUserData = userData.$id || userData.userData.$id ;
        
        setisAuthor( userIdfromPost == userIdfromUserData) ;
        setIsLoadingUserID(false)
      }else {
        setIsLoadingUserID(true)
      }
    } , [post , userData])

   

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return IsLoadingUserID ? (<h1>Loading...  </h1>) :
     
       <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={service.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Btn bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Btn>
                            </Link>
                            <Btn bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Btn>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    
}