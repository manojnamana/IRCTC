import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Box  display= {"flex"} alignItems={"center"} justifyContent={"center"} mt={"20%"}>
        <Typography color={"red"} fontWeight={900} fontSize={50}>
          Page Not Found
        </Typography>
    </Box>
  )
}

export default NotFound
