import React, {Children} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './layout.jsx'
import { Home, Header, Contact, Footer, About ,User , Github , githubInfo} from './components';

// const router = BrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//     ]
//   }
// ])

const rooter = createBrowserRouter  (
   createRoutesFromElements(
    <Route path="/" element ={<Layout/> }>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route
     loader={githubInfo}
      path='github' 
      element={<Github />}
       /> 
    </Route>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rooter} />
  </React.StrictMode>
)