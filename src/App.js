// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Form from './components/Form.js'
import React,{useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from 'react-router-dom'
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({message,type})
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#002051'
      document.body.style.color='white'
      showAlert("Dark mode enabled",'success')
      document.title='TextUtils-Dark'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("Light mode enabled",'success')
      document.title='TextUtils-Light'
    }
  }
  return (
    <>
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
{/* <Routes>
  <Route path='/about' element={ <About/>}> 
  </Route>
  <Route path='/' element={<Form showAlert={showAlert}/>}>
  </Route>
</Routes>
</Router> */}
<Form showAlert={showAlert}/>
    </>
  );
}

export default App;
