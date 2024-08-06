import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRightAlt } from "@mui/icons-material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box, Paper, Stack, Typography,Button, TextField, Snackbar, Alert } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function TrainAvailability() {
  const location = useLocation();
  const { fromDestination, toDestination, date } = location.state || {};
  const [open, setOpen] = React.useState(false);
  const [name,setName] = React.useState("");
  const [number,setNumber] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [age,setAge] = React.useState("");
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const [BookTicketOpen, setBookTicketOpen] = React.useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if(!name || !number || !email || !age){
      setOpenSnackbar(true);
    }
    else{
      setBookTicketOpen(true);
    setOpen(false);
    }
    
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClose = () => {
    setOpen(false);
    setBookTicketOpen(false)
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  

  return (
    <Box px={"8%"} pt={"5%"}>
      <Paper elevation={1} sx={{ p: 3, display: "flex", justifyContent: "space-between" }}>
        <Stack direction={"row"} display={"flex"} alignItems={"center"} gap={3}>
          <Typography fontWeight={"bold"} fontSize={20} color={"purple"}>{fromDestination || "From Destination"}</Typography>
          <ArrowRightAlt color="success" />
          <Typography fontWeight={"bold"} fontSize={20} color={"purple"}>{toDestination || "To Destination"}</Typography>
        </Stack>
        <Stack direction={"row"} gap={2}>
          <Typography fontWeight={"bold"} fontSize={20} color={"purple"}>{date || "Select Date"}</Typography>
          <CalendarTodayIcon sx={{color:"green"}} />
        </Stack>
      </Paper>

      {/* Trains */}
      <Stack gap={2} mb={5}>
                <Paper sx={{p:3,mt:5}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                            <Typography fontWeight={"bold"}>12069 - Express 1</Typography>

                            <Typography >SMTWTFS</Typography>
                    </Stack>

                    
                    <Stack direction={'row'} justifyContent={"space-between"}>
                            <Typography color={"grey"} pt={2}>04:00 NZM ---19h 35m--- 23:35 MMCT</Typography>

                            <Typography color={"green"} pt={2} >View Schedule</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={3}>
                        {/* Sl */}
                    <Stack onClick={handleClickOpen} >
                <Paper  sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 3A */}
                    <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 2A */}
                        <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 1A */}
                    <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                    </Stack>
                    <Typography textAlign={"end"} color={"green"} fontWeight={"bold"}>Check 6 days Availabilty</Typography>
                </Paper>

                <Paper sx={{p:3,mt:5}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                            <Typography fontWeight={"bold"}>12069 - Express 1</Typography>

                            <Typography >SMTWTFS</Typography>
                    </Stack>

                    
                    <Stack direction={'row'} justifyContent={"space-between"}>
                            <Typography color={"grey"} pt={2}>04:00 NZM ---19h 35m--- 23:35 MMCT</Typography>

                            <Typography color={"green"} pt={2} >View Schedule</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={3}>
                        {/* Sl */}
                    <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 3A */}
                    <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 2A */}
                        <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 1A */}
                    <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                    </Stack>
                    <Typography textAlign={"end"} color={"green"} fontWeight={"bold"}>Check 6 days Availabilty</Typography>
                </Paper>

                <Paper sx={{p:3,mt:5}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                            <Typography fontWeight={"bold"}>12069 - Express 1</Typography>

                            <Typography >SMTWTFS</Typography>
                    </Stack>

                    
                    <Stack direction={'row'} justifyContent={"space-between"}>
                            <Typography color={"grey"} pt={2}>04:00 NZM ---19h 35m--- 23:35 MMCT</Typography>

                            <Typography color={"green"} pt={2} >View Schedule</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={3}>
                        {/* Sl */}
                    <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 3A */}
                    <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 2A */}
                        <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 1A */}
                    <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                    </Stack>
                    <Typography textAlign={"end"} color={"green"} fontWeight={"bold"}>Check 6 days Availabilty</Typography>
                </Paper>

                <Paper sx={{p:3,mt:5}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                            <Typography fontWeight={"bold"}>12069 - Express 1</Typography>

                            <Typography >SMTWTFS</Typography>
                    </Stack>

                    
                    <Stack direction={'row'} justifyContent={"space-between"}>
                            <Typography color={"grey"} pt={2}>04:00 NZM ---19h 35m--- 23:35 MMCT</Typography>

                            <Typography color={"green"} pt={2} >View Schedule</Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={3}>
                        {/* Sl */}
                    <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 3A */}
                    <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 2A */}
                        <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                        {/* 1A */}
                    <Stack>
                <Paper sx={{width:200,p:3,mt:2,bgcolor:"#f8f8f8"}}>
                    <Stack direction={'row'} justifyContent={"space-between"}>
                    <Typography color={"grey"} >SL</Typography>

                    <Typography color={"green"}  >₹620</Typography>
                    </Stack>
                    <Stack>
                        <Typography color={"#de941a"} fontSize={14}>
                            RLWL68/WL47
                        </Typography>
                        <Typography color={"#de941a"} fontSize={14}>
                            63% Chance
                        </Typography>
                    </Stack>
                    </Paper>
                    <Typography pl={2} pt={1} color={"gray"} fontSize={13}>2 hrs ago</Typography>
                    </Stack>
                    </Stack>
                    <Typography textAlign={"end"} color={"green"} fontWeight={"bold"}>Check 6 days Availabilty</Typography>
                </Paper>
                </Stack>

                <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Book Ticket"}
        </DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
            Train Name with Number
          </DialogContentText>
          <Stack component={"form"}>
          <TextField
            required
            margin="dense"
            id="passenger"
            name="Passenger name"
            label="Passenger name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            required
            margin="dense"
            id="age"
            name="Passenger Age"
            label="Passenger Age"
            type="number"
            fullWidth
            variant="standard"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
          />
          <TextField
            required
            margin="dense"
            id="phonenumber"
            name="Mobile Number"
            label="Mobile Number"
            type="number"
            fullWidth
            variant="standard"
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
          />
          <TextField
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!validateEmail(email) && email.length > 0}
            helperText={!validateEmail(email) && email.length > 0 ? "Invalid email format" : ""} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='contained' color='error'>Disagree</Button>
          <Button onClick={handleClick} variant='contained ' type='submit' sx={{bgcolor:"green",color:'white',"&:hover":{bgcolor:"darkgreen"}}} >
            Book Ticket
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          Please fill in all fields.
        </Alert>
      </Snackbar>
      <Snackbar open={BookTicketOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Ticket Booked Successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
