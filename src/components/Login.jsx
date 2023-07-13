import React, { useState } from 'react';
import styles from '../Login.module.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { Grid, Paper, Typography } from '@mui/material';
import LoginImage from '../images/secure_login.png'

const Login = (props) => {

  const { setUserdata } = props;

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setEmailError("");
    }

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      setPasswordError("");
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!email) {
        setEmailError("Please enter an Email Address");
      }
      else if (email && !validateEmail(email)) {
        setEmailError("Please enter a Valid Email Address");
      }
      else if (!password) {
        setPasswordError("Please enter a Password");
      }
      else {
        // Redirect to Profile page for successful login
        setUserdata({email: email, password: password});
        navigate("/");
      }
  };
  
  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  return (
    <>
      <Navbar />
      <Grid container justifyContent="center" sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sx={{
            display: { xs: "none", sm: "none", lg: "block" },
          }}
        >
          <img src={LoginImage} alt="Login" className={styles["login-image"]} />
        </Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Paper elevation={3} className={styles["form-container"]}>
            <Typography variant='h4' align='center' mt={8} mb={8} gutterBottom>
              Login Form
            </Typography>
            <form className={styles["login-container"]} onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                // type="email"
                placeholder="youremail@example.com"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                // required
                autoComplete="on"
              />
              {emailError && <p className={styles.error}>{emailError}</p>}
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="*********"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                // required
                autoComplete="on"
              />
              {passwordError && <p className={styles.error}>{passwordError}</p>}
              <button type="submit">Log In</button>
            </form>
            <button
              className={styles["btn-link"]}
              onClick={() => navigate("/register")}
            >
              Don't have an Account? Register here!
            </button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
