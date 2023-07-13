import React,{ useContext } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import UserContext from './contexts/UserContext'

const Home = () => {

  const {userData} = useContext(UserContext);

  console.log(userData);

  return (
      <>
      <Navbar />
      {userData ? (
        <>
          <h1>Hello {''}
            {(userData.firstName && userData.lastName) && (
              <span style={{fontWeight: "bolder"}}>
                 {userData.firstName} {userData.lastName}
              </span>
            )}
          </h1>
          <p>
             Your Email Address is: { userData.email }       
          </p>
        </>
      ) : (
          <h1>Hello User. Please login to check your profile</h1>
      )}
          <Outlet/>
      </>
  )
}

export default Home
