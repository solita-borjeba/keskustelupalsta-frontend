import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Header from './components/Header'
import SubjectsSPA from './components/pages/SubjectsSPA';
import SubjectButton from './components/buttons/SubjectButton';

function App() {
  const columns = ['Subject', 'NUmber of messages', 'Timestamp']
  const types = ['New subject', 'Update subject']; 

  return (
    <div className="App">
        <Header />
        <SubjectsSPA />
        <SubjectButton subject={types} />
    </div>
    
  );
}

export default App;
