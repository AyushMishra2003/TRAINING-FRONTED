import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const user=useSelector((state)=>state.auth)
  console.log(user)
  return (
    <div>
      <h1>i am profile</h1>
    </div>
  )
}

export default UserProfile
