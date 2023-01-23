
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import TextFrom from './TextFrom';
import About from './About';
import React, { useState } from 'react';
import Alert from './Alert';
import Contect from './Contect';
import { BrowserRouter, Route, Routes } from "react-router-dom"

 


function App() {
  const [mode, setMode]= useState('light');

  const [alert, setAlert]= useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enable", "success");
    }
  }
  return ( 
       <> 
       <BrowserRouter>
       <Navbar mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className='container my-3'> 
      <Routes>
        <Route path='/'element={ <TextFrom showAlert={showAlert} heading="Enter the text to Analyze"mode={mode}/>}/>
        <Route path='/about'element={<About />}/>
        <Route path='/contect'element={ <Contect/> }/>
      </Routes>
      </div>
      <Footer/>
     </BrowserRouter>
        </>

  );
}


export default App;
   



    