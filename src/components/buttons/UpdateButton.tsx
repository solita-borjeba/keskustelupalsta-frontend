import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../../config/constants';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Button, DialogActions } from '@mui/material';
import SubjectDataService from '../../services/SubjectDataService';

function UpdateButton(props: any) {
    
    const [updatesubject, setUpdatesubject] = useState(false);
    const INITIAL_STATE = {
        id: 0,
        subjectname: 'Subject name',
        message: 'Message',
        timestamp: new Date()
    };

    const[subject, setSubject] = useState(INITIAL_STATE);

    const handleUpdateSubjectOpen = () => {
        setUpdatesubject(true);
    }
    const handleSubjectClose = () => {
        setUpdatesubject(false);
        initialState();
    }

    const initialState = () => {
        setSubject(INITIAL_STATE);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubject({...subject, [event.target.name]: event.target.value});
    }
    
    const handleUpdateSubjectSave = () => {
        updateSubject(subject);
        handleSubjectClose();
    }
    
    // Update a subject
    const updateSubject = (subject: any) => {
        SubjectDataService.update( subject.id, subject);
    }

/*
    const boxDefault = {
        height: 100,
        border: "1px solid transparent",
        padding: 2,
        minWidth: 600,
        m: 1
    }
*/
    
    return (
        <div>
        <br /> <br /> <br />
            <Button variant="outlined" color="primary" sx={{ height: 40}} onClick={handleUpdateSubjectOpen} >{props.subject[1]}</Button>
            <Dialog open={updatesubject} onClose={handleSubjectClose}>
                <DialogTitle>{props.subject[1]}</DialogTitle>
                <DialogContent>
                    <br />
                    <input type="number"
                        name="id"
                        onChange={handleChange}
                        value={subject.id} />
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
                    <button onClick={handleSubjectClose}>Peruuta</button>
                    <button onClick={handleUpdateSubjectSave}>Tallenna</button>
                </DialogActions>
            
            </Dialog>
        </div>
    )

}

export default UpdateButton;
