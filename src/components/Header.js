// import React from 'react';
import { Container } from '@mui/material';

const Header = () => {
  // Component logic here

  return (
    <Container maxWidth="lg" className = "heading">
      <h1>
        Customer Churn Predictor
      </h1>
      <h3>Made by Nirbhay Singh Sandhu</h3>
      <hr className = "underline"></hr>
    </Container>
  );
};

export default Header;