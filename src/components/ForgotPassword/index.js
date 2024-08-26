import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, Paper, Typography, Snackbar, Alert, Stack } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const navigate = useNavigate();


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email  ) {
      setSnackbarMessage('Please fill in all fields.');
      setOpenSnackbar(true);
    } else if (!validateEmail(email)) {
      setSnackbarMessage('Please enter a valid email address.');
      setOpenSnackbar(true);
    } else {
      setOpenSnackbar(true);
      setTimeout(() => navigate("/"), 3000); 
     
    //   try{
    //     const response =  await axios.post('https://railways-three.vercel.app/api/password-reset-request/', { email });
    //     if (response.status === 200) {
    //       setSnackbarMessage('Reset Password Link Sent To Your Email');
    //       setOpenSnackbar(true);
    //        setTimeout(() => navigate("/"), 3000); 
    //   }
    // }catch(error){
    //   setSnackbarMessage(error.response?.data?.email );
    //     setOpenSnackbar(true);
    //   }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: "center",
          mt: { md: "10%", xs: "25%" }, p: 3, mx: "20%", width: "450"
        }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography fontSize={{ md: "20", xs: 25 }} color={"Green"} fontWeight={"bold"} mb={3}>
          IRCTC Forgot Password
        </Typography>
        <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            sx={{ mb: 3 }}
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!validateEmail(email) && email.length > 0}
            helperText={!validateEmail(email) && email.length > 0 ? "Invalid email format" : ""}
          />
        </FormControl>

        <Button variant='contained' type='submit' sx={{ my: 3 }}>Reset Password</Button>
          <Stack direction={{md:"row",xs:"column"}} display={"flex"} justifyContent={"space-between"} spacing={4}>
        <Link to="/register" style={{ textDecoration: "none", fontSize: 20 }}>Create New Account</Link>
        <Link to="/" style={{ textDecoration: "none", fontSize: 20 }}>Login</Link>
        </Stack>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarMessage === 'Reset Password Link Sent To Your Email' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ForgotPassword;
