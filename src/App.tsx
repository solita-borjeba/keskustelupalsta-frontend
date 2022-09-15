import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import GetSubjects from './components/GetSubjects';
import AddSubject from './components/AddSubject';
import UpdateSubject from './components/UpdateSubject';
import DeleteSubject from './components/DeleteSubject';

function App() {
  return (
    <div className="App">
      <Appbar position="static">
        <Toolbar>
          <Typography variant="h6">
            Keskustelupalsta
          </Typography>
        </Toolbar>
      </Appbar>
          <GetSubjects />
          {/* Ei toteutettu vielä
          <br /> <br />
          <AddSubject />
          <br />
          <UpdateSubject />
          <br />
          <DeleteSubject />
          */}
    </div>
  );
}

export default App;
