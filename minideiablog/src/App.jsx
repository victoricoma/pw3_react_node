import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './navbar/NavBar';
import Typography from '@mui/material/Typography';
import './App.css'


function App() {
  return (
    <>
      <div>
        <ResponsiveAppBar />
      <Box sx={{ width: '100%', maxWidth: 500 }}/>
       
        <Typography variant="h4" gutterBottom>
          Minha página em React
        </Typography>
        <Button variant="contained">Hello world</Button>
      </div>
    </>
  )
}

export default App
