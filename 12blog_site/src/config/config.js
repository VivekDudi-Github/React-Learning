const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL) ,
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID) ,
    appwriteDatabase_id : String(import.meta.env.VITE_APPWRITE_DATABSE_ID) ,
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID) ,
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID ) ,
}
export default conf 