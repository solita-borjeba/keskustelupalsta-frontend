import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Header from './components/Header'
import Keskustelupalsta from './pages/Keskustelupalsta';
import AddButton from './components/buttons/AddButton';
import UpdateButton from './components/buttons/UpdateButton';

function App() {
  const columns = ['Subject', 'NUmber of messages', 'Timestamp']
  const types = ['New subject', 'Update subject']; 

  return (
    <div className="App">
        <Header />
        <Keskustelupalsta />
        <AddButton subject={types} />
        <UpdateButton subject={types} />
    </div>
    
  );
}

export default App;
