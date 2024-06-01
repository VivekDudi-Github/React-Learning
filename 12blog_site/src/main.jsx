import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store  from './store/Store.js' 
import { RouterProvider   , createBrowserRouter } from 'react-router-dom'



import {Login ,  Protected , Post , SignUp} from './components/index.js'
import AllPosts from './components/pages/AllPost.jsx'
import AddPost from './components/pages/AddPost.jsx'
import EditPost from './components/pages/EditPost.jsx'
import Home from "./components/pages/Home.jsx"

const router = createBrowserRouter([
    {
        path:'/' , 
        element: <App/> , 
        children : [{
            path:'/',
            element: (
                <Home/>
            )
        } , 
        {
            path: '/Login' , 
            element: (
              <Protected authentication={false}>
                <Login/>
              </Protected>  
            ) ,
        } ,
        {
            path: "/signup",
            element: (
                <Protected authentication={false}>
                    <SignUp/>
                </Protected>
            ),
        } ,
        {
            path: "/all-posts",
            element: (
                <Protected authentication>
                    {" "}
                    <AllPosts />
                </Protected>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Protected authentication>
                    {" "}
                    <AddPost />
                </Protected>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Protected authentication>
                    {" "}
                    <EditPost />
                </Protected>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ]
    }
])



ReactDOM.createRoot(document.getElementById('root')).render(
 
    <React.StrictMode>
    <Provider store={store} >
   <RouterProvider router={router}/>
    </Provider>
    </React.StrictMode>
)
