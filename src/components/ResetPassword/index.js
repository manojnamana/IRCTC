import * as React from 'react';
import Box from '@mui/material/Box';

import { Button, FormControl, IconButton, InputLabel, OutlinedInput, Paper, Typography, Snackbar, Alert, Stack } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

const ResetPassword = () => {
const [confPassword,setConfPassword] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfPassword, setShowConfPassword] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfPassword = () => setShowConfPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();


  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!confPassword || !password) {
      setSnackbarMessage('Please fill in all fields.');
      setOpenSnackbar(true);
    } else if (password !== confPassword) {
      setSnackbarMessage('Password and Confirm Password Should Be Same');
      setOpenSnackbar(true);
    } else {
      
     
      try{
        const response =  await axios.post(`https://railways-three.vercel.app/api/password-reset-confirm/uidb64/token/`, { new_password:confPassword });
        if (response.status === 200) {
          setSnackbarMessage('Password Reseted successful!');
          setOpenSnackbar(true);
          setTimeout(() => navigate("/"), 3000); 
      }
    }catch(error){
      setSnackbarMessage(error.response?.data?.error );
        setOpenSnackbar(true);
      }
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
          IRCTC Reset Password
        </Typography>
        <FormControl sx={{ m: 1, width: '80%' }} required variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            placeholder='Password'
            id="outlined-adornment-password"
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
        <FormControl sx={{ m: 1, width: '80%' }} required variant="outlined">
          <InputLabel htmlFor="outlined-adornment-ConfirmPassword">Confirm Password</InputLabel>
          <OutlinedInput
            placeholder='Confirm Password'
            id="outlined-adornment-password"
            type={showConfPassword ? 'text' : 'password'}
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="ConfirmPassword"
          />
        </FormControl>
        <Button variant='contained' type='submit' sx={{ my: 3 }}>Submit</Button>
          <Stack direction={{md:"row",xs:"column"}} display={"flex"} justifyContent={"space-between"} spacing={4}>
        <Link to="/register" style={{ textDecoration: "none", fontSize: 20 }}>Create New Account</Link>
        </Stack>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarMessage === 'Password Reseted successful!' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ResetPassword;
