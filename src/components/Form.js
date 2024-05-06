import React from 'react';
// import features from '../features';
import { Button, Container, MenuItem, Select, TextField } from '@mui/material';

const Form = ({displayContent, setDisplayContent}) => {

const [featureData, setFeatureData] = React.useState({});
const [prediction, setPrediction] = React.useState({});

const handleChange = (event) =>{
    const {value, name} = event.target;
    setFeatureData(prevState =>{
        return {
            ...prevState,
            [name]: value
        }
    })
}

console.log(featureData);

const handleSubmit = (e) =>{
    e.preventDefault();
        fetch('http://localhost:5000/', {
            method: 'POST',
            body: JSON.stringify(featureData),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setPrediction(data))
        
    setDisplayContent(true);
}

const styles = {
    "text-align":"center",
    "margin":"3%"
}

const buttonStyle = {
    "text-align":"center",
    "margin":"3%"
}

  return (
    <Container className = "body-container" maxWidth="elg">
        <Container maxWidth="md" className = "form-data">
        <h1 style = {styles}>Enter the Customer Attributes</h1>
        <hr className = "underline"></hr>
        <form className = "form" onSubmit = {handleSubmit}>

            <p className = "feature-label"> Age (18-24) &nbsp;<TextField required id="outlined-required" label="Required" name="age" onChange = {handleChange}/></p>

            <p className = "feature-label"> Gender &nbsp;
                <Select required id="demo-simple-select-standard" name="gender" onChange={handleChange}>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
            </p>

            <p className = "feature-label"> Tenure (1-60) &nbsp;<TextField required id="outlined-required" label="Required" name="tenure" onChange = {handleChange}/></p>
            <p className = "feature-label"> Usage Frequency (1-30) &nbsp;<TextField required id="outlined-required" label="Required" name="frequency" onChange = {handleChange}/></p>
            <p className = "feature-label"> Support Calls (1-10) &nbsp;<TextField required id="outlined-required" label="Required" name="support" onChange = {handleChange}/></p>
            <p className = "feature-label"> Payment Delay (0-30) &nbsp;<TextField required id="outlined-required" label="Required" name="delay" onChange = {handleChange}/></p>

            <p className = "feature-label"> Subscription Type &nbsp;
                <Select required id="demo-simple-select-standard" name="subscription" onChange={handleChange}>
                    <MenuItem value={"Basic"}>Basic</MenuItem>
                    <MenuItem value={"Standard"}>Standard</MenuItem>
                    <MenuItem value={"Premium"}>Premium</MenuItem>
                </Select>
            </p>

            <p className = "feature-label"> Contract Length &nbsp;
                <Select required id="demo-simple-select-standard" name="contract" onChange={handleChange}>
                    <MenuItem value={"Monthly"}>Monthly</MenuItem>
                    <MenuItem value={"Quarterly"}>Quarterly</MenuItem>
                    <MenuItem value={"Annual"}>Annual</MenuItem>
                </Select>
            </p>

            <p className = "feature-label"> Total Spend (100-1000) &nbsp;<TextField required id="outlined-required" label="Required" name="spend" onChange = {handleChange}/></p>
            <p className = "feature-label"> Last Interaction (1-30) &nbsp;<TextField required id="outlined-required" label="Required" name="interaction" onChange = {handleChange}/></p>

            {/* <input type="submit" className = "submit-button"></input> */}
            <p style = {buttonStyle}><Button variant="contained" disableElevation type = "submit">Submit</Button></p>
        </form>

        </Container>
        {displayContent && 
        <Container maxWidth="elg" className = "prediction-container">
            <p className = "prediction-value">{prediction.churn_prediction === 1 ? "Customer will Churn" : "Customer will not Churn"}</p>
            <hr className = "underline"></hr>
        </Container>}
    </Container>
    
  );
};

export default Form;