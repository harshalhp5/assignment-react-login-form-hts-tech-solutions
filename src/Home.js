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
      <h2>Problem Statement:</h2>
      <span style={{fontWeight: "bold"}}>
        Build a login form using React.js, where users can input their email and password to log in. The login form should validate that both the email and password fields are not empty and that the email is a valid email address format. Upon successful login, the user should be redirected to a profile page.
      </span>

      <ul>
        <span style={{ fontWeight: "bold", marginLeft: "-17px" }}>
          Task Instructions:
        </span>
        <li>
            Create a new React.js project using the CodeSandbox website.
        </li>
        <li>
            Create a new component called "Login.jsx" that will contain the login form.
        </li>
        <li>
            Create a new file Login.module.css for style the login form using CSS.
        </li>
        <li>
            The login form should have two input fields: one for the user's email and one for their password and add an onChange event to update the state variables as the user types..
        </li>
        <li>
            Add validation to the login form. The email field should only accept valid email addresses (e.g. john.doe@example.com). Both email and password fields should be required and should display an error message if they are empty
        </li>
        <li>
            When the user submits the login form, check if the email and password are valid. If the email and password are valid, the user should be redirected to a profile page and show data (email, password).
        </li>
        <li>
            Test the application thoroughly to ensure that it works as expected and handles errors gracefully.
        </li>
        <li>
            You can use any additional libraries or tools that you find useful for this task.
        </li>
        <li>
            After completing the task, share codeSandBox url.
        </li>
      </ul>
        <Outlet/>
      </>
  )
}

export default Home
