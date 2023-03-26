import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
const UserList = () => {
 const [userList,setUserlist]  = useState ([])
useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{setUserlist(res.data);});
},[]);

  return (
    <div className=''>

      {
        userList.map((user)=>(<div className='Listmap'><h1 key={user.id} className='name'>{user.name}</h1>
        <h2 className='username'>{user.username}</h2>
        <h2 className='street'>{user.address.street}</h2>
        <h2 className='phone'>{user.phone}</h2>
        <h2 className='website'>{user.website}</h2>
        <h2 className='bs'>{user.company.bs}</h2>
        </div>))
      }

    </div>
  )
}

export default UserList