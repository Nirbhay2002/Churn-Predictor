import Header from './components/Header';
import Form from './components/Form'
import Details from './components/Details';
import React from 'react';

function App() {
  const [displayContent, setDisplayContent] = React.useState(false);
  
  return (
    <div className="App">
      <Header />
      <Form displayContent = {displayContent} setDisplayContent = {setDisplayContent}/>
      { displayContent && <Details displayContent = {displayContent} setDisplayContent = {setDisplayContent}/> }
    </div>
  );
}

export default App;
