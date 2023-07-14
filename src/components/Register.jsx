import React, { useState } from "react";
import styles from "../Login.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { Alert, Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import RegisterImage from "../images/Sign_up.png";

const Register = (props) => {

  const { setUserdata } = props;
  const navigate = useNavigate();
  const [error, setError] = useState({
    input: "",
    status: false,
    msg: "",
    type: ""
  });


  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const inputData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };
    
    if (
      !inputData.firstName &&
      !inputData.lastName &&
      !inputData.email &&
      !inputData.password &&
      !inputData.confirmPassword
    ) {
      setError({
        input: "all",
        status: true,
        msg: "Registration unsuccessful. Please enter all the fields.",
        type: "error",
      });
    }
    else if (!inputData.firstName) {
      setError({
        input: "firstName",
        status: true,
        msg: "Please enter the First Name",
        type: "error",
      });
    }
    else if (!inputData.lastName) {
      setError({
        input: "lastName",
        status: true,
        msg: "Please enter the Last Name",
        type: "error",
      });
    }
    else if (!inputData.email) {
      setError({
        input: "email",
        status: true,
        msg: "Please enter an Email Address",
        type: "error",
      });
    }
    else if (!validateEmail(inputData.email)) {
      setError({
        input: "email",
        status: true,
        msg: "Please enter a Valid Email Address",
        type: "error",
      });
    }
    else if (!inputData.password) {
      setError({
        input: "password",
        status: true,
        msg: "Please enter a Password",
        type: "error",
      });
    }
    else if (!inputData.confirmPassword) {
      setError({
        input: "confirmPassword",
        status: true,
        msg: "Please confirm the Password",
        type: "error",
      });
    }
    else if (
      inputData.password &&
      inputData.confirmPassword &&
      inputData.password !== inputData.confirmPassword
    ) {
      setError({
        input: "confirmPassword",
        status: true,
        msg: "Password Mismatch. Please Confirm Password again.",
        type: "error",
      });
    }
    else {
      setUserdata(inputData);
      setError({
        input: "all",
        status: true,
        msg: "Registration Successful",
        type: "success",
      });
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
      <Grid container sx={{ height: "100vh" }}>
        <Grid
          item
          lg={7}
          sx={{
            backgroundImage: `url(${RegisterImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", sm: "none", lg: "block" },
          }}
        ></Grid>
        <Grid item lg={5} sm={12} xs={12}>
          <Paper
            elevation={3}
            className={styles["form-container"]}
          >
            <Typography variant="h4" my={3} style={{ textAlign: "center" }}>
              Sign Up Form
            </Typography>
            {/* Note: Registration Form is made using Material UI Components */}
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              id="registration-form"
              onSubmit={handleSubmit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
              />
              {error.status && error.input === "firstName" && (
                <Alert severity={error.type}>{error.msg}</Alert>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
              />
              {error.status && error.input === "lastName" && (
                <Alert severity={error.type}>{error.msg}</Alert>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
              />
              {error.status && error.input === "email" && (
                <Alert severity={error.type}>{error.msg}</Alert>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
              />
              {error.status && error.input === "password" && (
                <Alert severity={error.type}>{error.msg}</Alert>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />
              {error.status && error.input === "confirmPassword" && (
                <Alert severity={error.type}>{error.msg}</Alert>
              )}
              <Box textAlign="center">
                {error.status && error.input === "all" && (
                  <Alert severity={error.type}>{error.msg}</Alert>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, pz: 5 }}
                >
                  Sign Up
                </Button>
              </Box>
              <button
                className={styles["btn-link"]}
                onClick={() => navigate("/login")}
              >
                Already have an Account? Sign In here!
              </button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
