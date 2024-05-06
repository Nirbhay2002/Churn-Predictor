import { Container } from "@mui/material";

function Details() {

    return (
    <Container maxWidth = "elg" className = "Details">
        <h1>The behind the scenes working is as follows:</h1><br></br><br></br>
        <p>The predictor uses a Churn detection database containing more than 43,000 rows.</p>
        <p>The model used for prediction is Random Forest Classifier which provides an accuray of 99.93% for the used dataset.</p>
        <p>The backend server has been setup using Flask.</p>
    </Container>
    );
  }
  
  export default Details;
  