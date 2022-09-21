import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../../constants';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Box, Button, DialogActions, Stack } from '@mui/material';

function SubjectButton(props: any) {
    
    const [newsubject, setNewsubject] = useState(false);
    const [updatesubject, setUpdatesubject] = useState(false);
    const INITIAL_STATE = {
        id: 0,
        subjectname: 'Subject name',
        message: 'Message',
        timestamp: new Date()
    };

    const[subject, setSubject] = useState(INITIAL_STATE);

    const handleNewSubjectOpen = () => {
        setNewsubject(true);
    }
    const handleUpdateSubjectOpen = () => {
        setUpdatesubject(true);
    }
    const handleNewSubjectClose = () => {
        setNewsubject(false);
        setUpdatesubject(false);
        initialState();
    }

    const initialState = () => {
        setSubject(INITIAL_STATE);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubject({...subject, [event.target.name]: event.target.value});
    }
    
    const handleNewSubjectSave = () => {
        addSubject(subject);
        handleNewSubjectClose();
    }
    const handleUpdateSubjectSave = () => {
        addSubject(subject);
        handleNewSubjectClose();
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

    // Update a subject
    const updateSubject = (subject: any) => {
        fetch(SERVER_URL  +  'updateSubject',
        {
            method: 'PUT',
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


    const boxDefault = {
        height: 100,
        border: "1px solid transparent",
        padding: 2,
        minWidth: 600,
        m: 1
    }

    
    return (
        <div>
        <br /> <br /> <br />
            <Stack justifyContent="space-around" alignItems="center" direction="row" sx={boxDefault}>
                <Button variant="outlined" color="primary" sx={{ height: 40}} onClick={handleNewSubjectOpen} >{props.subject[0]}</Button>
                <Button variant="outlined" color="primary" sx={{ height: 40}} onClick={handleUpdateSubjectOpen} >{props.subject[1]}</Button>
            </Stack>
            <Dialog open={newsubject} onClose={handleNewSubjectClose}>
                <DialogTitle>{props.subject[0]}</DialogTitle>
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
                    <button onClick={handleNewSubjectSave}>Tallenna</button>
                </DialogActions>
            
            </Dialog>
            <Dialog open={updatesubject} onClose={handleNewSubjectClose}>
                <DialogTitle>{props.subject[1]}</DialogTitle>
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
                    <button onClick={handleUpdateSubjectSave}>Tallenna</button>
                </DialogActions>
            
            </Dialog>
            
            <br /> <br />
            AddSubject näkymä yläpuolella.
        </div>
    )

}

export default SubjectButton;