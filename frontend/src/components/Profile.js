
import React from 'react'

const Profile = () => {

    const auth = localStorage.getItem("user")

  return (
    <div className='profile'>
    
          <div >
          <h3>Your Profile Details</h3>
            <h3> Name = {JSON.parse(auth).name}</h3>
            <h3>Email = {JSON.parse(auth).email}</h3>
            <h3>Id = {JSON.parse(auth)._id}</h3>
            </div>
    </div>
  )
}

export default Profile
