import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../constants';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DialogActions } from '@mui/material';

function AddSubject() {
    
    const [open, setOpen] = useState(false);
    const INITIAL_STATE = {
        id: 0,
        subjectname: 'Subject name',
        message: 'Message',
        timestamp: new Date()
    };

    const[subject, setSubject] = useState(INITIAL_STATE);

    const handleNewSubjectOpen = () => {
        setOpen(true);
    }
    const handleNewSubjectClose = () => {
        setOpen(false);
        initialState();
    }

    const initialState = () => {
        setSubject(INITIAL_STATE);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubject({...subject, [event.target.name]: event.target.value});
    }
    
    const handleSave = () => {
        addSubject(subject);
        handleNewSubjectClose();
    }

    // Add a new subject
    const addSubject = (subject: any) => {
        fetch(SERVER_URL  +  'createSubject',
        {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(subject)
  
        })
        .then(response => {
            if (response.ok) {
//                fetchSubjects();
            } else {
                alert('Something went wrong!');
            }
        })  
        .catch(err => console.error(err))
    }

    
    return (
        <div>
        <br /> <br /> <br />
            <button onClick={handleNewSubjectOpen}>Uusi aihe</button>
            <Dialog open={open} onClose={handleNewSubjectClose}>
                <DialogTitle>Uusi aihe</DialogTitle>
                <DialogContent>
                    <br />
                    <input type="text" 
                        name="subjectname"
                        onChange={handleChange} 
                        value={subject.subjectname}  />
                    <br />
                    <input type="text" 
                        name="message"
                        onChange={handleChange}
                        value={subject.message}  />
                    <br />
                </DialogContent>
                <DialogActions>
                    <button onClick={handleNewSubjectClose}>Peruuta</button>
                    <button onClick={handleSave}>Tallenna</button>
                </DialogActions>
            
            </Dialog>
            
            <br /> <br />
            AddSubject näkymä yläpuolella.
        </div>
    )

}

export default AddSubject;