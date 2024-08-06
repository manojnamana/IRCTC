import React, { useState } from 'react';
import { Box, Paper, Typography, Button, TextField, Autocomplete, FormControl, Select, MenuItem, Grid, Snackbar, Alert, Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Booking() {
  const [fromDestination, setFromDestination] = useState('');
  const [toDestination, setToDestination] = useState('');
  const [date, setDate] = useState('');
  const [quota, setQuota] = useState('10');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleFromChange = (event, newValue) => {
    setFromDestination(newValue ? newValue.city : '');
  };

  const handleToChange = (event, newValue) => {
    setToDestination(newValue ? newValue.city : '');
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleQuotaChange = (event) => {
    setQuota(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!fromDestination || !toDestination || !date || !quota) {
      setOpenSnackbar(true);

    } else {
      // Logic to book tickets
       navigate('/trains', { state: { fromDestination, toDestination, date, quota } });
      console.log(fromDestination, toDestination, date, quota);
      
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box display={'flex'} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} mt={"4%"}>
      <Paper elevation={3} sx={{ p: 8 }} component={"form"} onSubmit={handleSubmit}>
        <Typography fontWeight={"bold"} fontSize={30} color={"green"} textAlign={"center"} mb={5} pt={0}>IRCTC Train Booking</Typography>
        <Typography fontWeight={"bold"}>Welcome</Typography>
        <Typography>How may I help You?</Typography>
        <Paper p={3} sx={{ width: "100%", my: 3 }}>
          <Autocomplete
            options={FromDestinations}
            getOptionLabel={(option) => option.city}
            onChange={handleFromChange}
            renderInput={(params) => (
              <TextField {...params} label="From" variant="outlined" />
            )}
          />
        </Paper>
        <Paper p={3} mt={3} sx={{ width: "100%" }}>
          <Autocomplete
            options={ToDestinations}
            getOptionLabel={(option) => option.city}
            onChange={handleToChange}
            renderInput={(params) => (
              <TextField {...params} label="To" variant="outlined" />
            )}
          />
        </Paper>
        <Grid container my={3} gap={3}>
          <Grid xs={5} mr={3}>
            <Typography fontWeight={"bold"}>Journey Date</Typography>
            <Paper p={3} sx={{ width: 162 }}>
              <TextField type='date' placeholder='date' value={date} onChange={handleDateChange} />
            </Paper>
          </Grid>
          <Grid xs={5}>
            <Typography fontWeight={"bold"}>Journey Quota</Typography>
            <Paper p={3} sx={{ width: 162 }}>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  value={quota}
                  onChange={handleQuotaChange}
                >
                  <MenuItem value={10}>Gn - General</MenuItem>
                  <MenuItem value={20}>Ld - Ladies</MenuItem>
                  <MenuItem value={30}>Ss - Senior Citizen</MenuItem>
                  <MenuItem value={40}>Tq - Tatkal</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
        <Stack flexDirection={"row"} justifyContent={"center"}>
          <Button variant='contained' sx={{ width: "100%" }} type='submit'>Check Trains</Button>
        </Stack>
      </Paper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error">
          Please fill in all fields before Check Trains.
        </Alert>
      </Snackbar>

    </Box>
    
  );
}

const FromDestinations = [
    { city: 'Mumbai', code: 'BOM' },
    { city: 'Delhi', code: 'DEL' },
    { city: 'Bengaluru', code: 'BLR' },
    { city: 'Chennai', code: 'MAA' },
    { city: 'Kolkata', code: 'CCU' },
    { city: 'Hyderabad', code: 'HYD' },
    { city: 'Pune', code: 'PNQ' },
    { city: 'Ahmedabad', code: 'AMD' },
    { city: 'Jaipur', code: 'JAI' },
    { city: 'Lucknow', code: 'LKO' },
    { city: 'Nagpur', code: 'NAG' },
    { city: 'Indore', code: 'IDR' },
    { city: 'Bhopal', code: 'BHO' },
    { city: 'Patna', code: 'PAT' },
    { city: 'Kanpur', code: 'KNU' },
    { city: 'Vadodara', code: 'BDQ' },
    { city: 'Coimbatore', code: 'CJB' },
    { city: 'Kochi', code: 'COK' },
    { city: 'Thiruvananthapuram', code: 'TRV' },
    { city: 'Visakhapatnam', code: 'VTZ' },
    { city: 'Guwahati', code: 'GAU' },
    { city: 'Surat', code: 'STV' },
    { city: 'Ranchi', code: 'IXR' },
    { city: 'Raipur', code: 'RPR' },
    { city: 'Chandigarh', code: 'IXC' },
    { city: 'Mysuru', code: 'MYQ' },
    { city: 'Amritsar', code: 'ATQ' },
    { city: 'Varanasi', code: 'VNS' },
    { city: 'Aurangabad', code: 'IXU' },
    { city: 'Madurai', code: 'IXM' },
    { city: 'Jodhpur', code: 'JDH' },
    { city: 'Agra', code: 'AGR' },
    { city: 'Srinagar', code: 'SXR' },
    { city: 'Dehradun', code: 'DED' },
    { city: 'Tiruchirappalli', code: 'TRZ' },
    { city: 'Mangalore', code: 'IXE' },
    { city: 'Udaipur', code: 'UDR' },
    { city: 'Nashik', code: 'ISK' },
    { city: 'Gwalior', code: 'GWL' },
    { city: 'Jabalpur', code: 'JLR' },
    { city: 'Rajkot', code: 'RAJ' },
    { city: 'Bhavnagar', code: 'BHU' },
    { city: 'Jamnagar', code: 'JGA' },
    { city: 'Tirupati', code: 'TIR' },
    { city: 'Vijayawada', code: 'VGA' },
    { city: 'Rourkela', code: 'RRK' },
    { city: 'Durgapur', code: 'RDP' },
    { city: 'Gorakhpur', code: 'GOP' },
    { city: 'Bareilly', code: 'BEK' }
  ];

  const ToDestinations = [
    { city: 'Ajmer', code: 'AII' },
    { city: 'Allahabad', code: 'ALD' },
    { city: 'Alwar', code: 'AWR' },
    { city: 'Amravati', code: 'AMI' },
    { city: 'Asansol', code: 'ASN' },
    { city: 'Bhilai', code: 'BIA' },
    { city: 'Bhubaneswar', code: 'BBI' },
    { city: 'Bilaspur', code: 'BSP' },
    { city: 'Bikaner', code: 'BKN' },
    { city: 'Cuttack', code: 'CTC' },
    { city: 'Dhanbad', code: 'DHN' },
    { city: 'Dibrugarh', code: 'DIB' },
    { city: 'Durg', code: 'DGG' },
    { city: 'Erode', code: 'ED' },
    { city: 'Firozabad', code: 'FZD' },
    { city: 'Gandhinagar', code: 'GNC' },
    { city: 'Gaya', code: 'GAY' },
    { city: 'Guntur', code: 'GNT' },
    { city: 'Haridwar', code: 'HW' },
    { city: 'Hisar', code: 'HSR' },
    { city: 'Hubli', code: 'UBL' },
    { city: 'Imphal', code: 'IMF' },
    { city: 'Itanagar', code: 'ITR' },
    { city: 'Jalandhar', code: 'JUC' },
    { city: 'Jammu', code: 'IXJ' },
    { city: 'Jhansi', code: 'JHS' },
    { city: 'Jamnagar', code: 'JGA' },
    { city: 'Jharkhand', code: 'JKD' },
    { city: 'Kakinada', code: 'CCT' },
    { city: 'Karaikudi', code: 'KKDI' },
    { city: 'Karimnagar', code: 'KRMR' },
    { city: 'Katihar', code: 'KIR' },
    { city: 'Kharagpur', code: 'KGP' },
    { city: 'Kohima', code: 'KHM' },
    { city: 'Kolhapur', code: 'KLH' },
    { city: 'Kollam', code: 'QLN' },
    { city: 'Korba', code: 'KRBA' },
    { city: 'Kozhikode', code: 'CLT' },
    { city: 'Ludhiana', code: 'LUH' },
    { city: 'Manali', code: 'MNL' },
    { city: 'Margao', code: 'MRGA' },
    { city: 'Mathura', code: 'MTJ' },
    { city: 'Meerut', code: 'MUT' },
    { city: 'Moradabad', code: 'MB' },
    { city: 'Nanded', code: 'NED' },
    { city: 'Nellore', code: 'NLR' },
    { city: 'Ooty', code: 'UAM' },
    { city: 'Panjim', code: 'PNJ' },
    { city: 'Puducherry', code: 'PNY' },
    { city: 'Ratlam', code: 'RTM' }
  ];
  
  