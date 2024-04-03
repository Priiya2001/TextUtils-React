import './App.css';
// import Aboutus from './myComponent/Aboutus';
import Navbar from './myComponent/Navbar';
import TextUtils from './myComponent/TextUtils';
import Alert from './myComponent/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom"

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode"
      // setInterval(()=>{
      //   document.title='TextUtlis is Amazing Mode';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtlis ';
      // },1500);

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has beem enabled", "success");
      document.title = "TextUtils-Light Mode"
    }
  }


  return (
    <>
      {/* <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div>
        <Routes>
          <Route path='/about' element={<Aboutus/>} ></Route>

          <Route path='/' element={<TextUtils showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>

          </Route>
        </Routes>

      </div>
      </Router> */}
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextUtils showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    </>
  );
}

export default App;
