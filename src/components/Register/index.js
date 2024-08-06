import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Grid, IconButton, InputLabel, OutlinedInput, Paper, Typography, Snackbar, Alert } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [phonenumber, setPhonenumber] = React.useState('');
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName  || !email || !password || !phonenumber) {
      setSnackbarMessage('Please fill in all fields.');
      setOpenSnackbar(true);
    } else if (!validateEmail(email)) {
      setSnackbarMessage('Please enter a valid email address.');
      setOpenSnackbar(true);
    } else {


      try {
       const response =  await axios.post('https://backend-irctc.vercel.app/api/register/', {first_name:firstName,last_name:lastName, email, password,phone_number:phonenumber });
        if (response.status === 201) {
          setSnackbarMessage('Successfully Registered!');
          setOpenSuccessSnackbar(true);
          setTimeout(() => navigate("/"), 3000); 
        }
      } catch (error) {
        setSnackbarMessage(error.response?.data?.message || 'Registration failed');
        setOpenSnackbar(true);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setOpenSuccessSnackbar(false);
  };

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: "center",
          mt: { md: "5%", xs: "25%" }, p: 3, mx: "20%", width: "450"
        }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography fontSize={{ md: "20", xs: 25 }} fontWeight={"bold"} color={"Green"} mb={3}>
          IRCTC Register
        </Typography>
        <Grid container display={"flex"} justifyContent={"center"}>
          <Grid xs={6}>
            <FormControl sx={{ ml: 2, width: '90%' }} variant="outlined">
              <TextField
                id="FirstName"
                label="First Name"
                required
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{ mb: 3 }}
              />
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl sx={{ ml: 1, width: '90%' }} variant="outlined">
              <TextField
                id="LastName"
                label="Last Name"
                required
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{ mb: 3 }}
              />
            </FormControl>
          </Grid>


          <Grid xs={12}>
            <FormControl sx={{ ml: 2, width: '95%' }} variant="outlined">
              <TextField
                id="email"
                label="Email"
                type='email'
                required
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!validateEmail(email) && email.length > 0}
                helperText={!validateEmail(email) && email.length > 0 ? "Invalid email format" : ""}
                sx={{ mb: 3 }}
              />
            </FormControl>
          </Grid>
          <Grid xs={12}>
            <FormControl sx={{ ml: 2, width: '95%' ,mb:3}} required variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid xs={12}>
            <FormControl sx={{ ml: 2, width: '95%' }} variant="outlined">
              <TextField
                id="phonenumber"
                label="Phonenumber"
                required
                placeholder='Phonenumber'
                type='number'
                value={phonenumber}
                onChange={(e) => setPhonenumber (e.target.value)}
                sx={{ mb: 3 }}
              />
            </FormControl>
          </Grid>

        </Grid>
        <Button variant='contained' type='submit' sx={{ my: 3 }}>Register</Button>

        <Typography mr={2}>Already have an account?</Typography>
        <Link to="/" style={{ textDecoration: "none", fontSize: 20 }}>Login</Link>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Register;
