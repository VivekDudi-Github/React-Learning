import conf from "../config/config.js" 
import { Client , ID , Databases ,Storage , Query } from "appwrite"


export class Service {
    client = new Client() 
    Databases ;
    Bucket ;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId) ;
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }    

    async createPost ({title , slug , content , featuredImage , status , userId }){
        try {
           
            return  this.databases.createDocument(
                conf.appwriteDatabase_id ,
                conf.appwriteCollectionId ,
                slug, 
                {title , 
                 content ,featuredImage , status , userId
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost error" , error);
        }
    }

    async updatePost (slug ,{titile , context , featuredImage ,userId, status}) {
        try {
            return this.databases.updateDocument(
                conf.appwriteDatabase_id ,
                conf.appwriteCollectionId ,
                slug, 
                {titile , 
                 context , featuredImage , status , userId
                })
        } catch (error) {
            console.log(error);
        }
    }


    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabase_id ,
                conf.appwriteDatabase_id ,
                slug
            ) 
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error" , error);
            return true
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
            conf.appwriteDatabase_id ,
            conf.appwriteCollectionId ,
            slug 
        )
            
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error" , error);
        }
    }

     async getPosts (queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabase_id ,
                conf.appwriteCollectionId ,
                queries ,
            )
        } catch (error) {
         console.log("Appwrite serive :: getPosts :: error" , error);
        }
     }  


     async uploadFile(file){
        try { 
            
            return this.bucket.createFile(
                conf.appwriteBucketId ,
                ID.unique() ,
                file 
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error" , error);
            return false 
        }
     }

     async deleteFile (fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId ,
                fileId
                
            )
            return true
        } catch (error) {
            console.log(error)
            return false   
        }
     }

     getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
     }
}

const service = new Service()
export default service