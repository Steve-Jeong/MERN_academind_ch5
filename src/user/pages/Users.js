import React from 'react'
import UsersList from '../components/UsersList'


const Users = () => {
  const USERS = [
    {
      id:'u1', 
      name:'Max', 
      image:'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
      places:3
    },
    {
      id:'u2', 
      name:'Schwarz', 
      image:'https://images.unsplash.com/photo-1602254510084-6c0d4b483e77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80', 
      places:5
    }
  ]
  return (
    <div>
      <UsersList items = {USERS}/>
    </div>
  )
}

export default Users
