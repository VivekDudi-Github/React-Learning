import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Container , Logo , LogoutBtn} from '../index'


function Header() {
  const authStatus = useSelector((state) => state.auth.status )
  const navigate = useNavigate()

  const navItems = [{
    name : 'Home' ,
    slug : "/" ,
    active: true , 
  }, 
   {
    name: "Login",
    slug: "/login",
    active: !authStatus,
},
{
    name: "Signup",
    slug: "/signup",
    active: !authStatus,
},
{
    name: "All Posts",
    slug: "/all-posts",
    active: authStatus,
},
{
    name: "Add Post",
    slug: "/add-post",
    active: authStatus,
}]
  return (
    <header className='p-3 shadow-xl shadow-white bg-black h-28 '>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo className='h-28'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=> 
            item.active? (
              <li key={item.name} >
                <button className='inline-block px-6 py-2 text-white duration-200 hover:bg-blue-100 rounded-full hover:text-black'
                onClick={() => navigate(item.slug)}>{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
  
}

export default Header