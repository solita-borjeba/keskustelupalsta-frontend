import React, { useCallback, useEffect, useState } from 'react';
import { SERVER_URL } from '../config/constants';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import axios from 'axios';
import { url } from 'inspector';
import UpdateButton from '../components/buttons/UpdateButton';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import SubjectDataService from '../services/SubjectDataService';

function SubjectsSPA() {
    const [subjects, setSubjects] = useState<any[]>([])
    const [message, setMessage] = useState("");

    const testrows: GridRowsProp = [ //Turha
        { id: 1, aihe: 'Hello', viestienlkm: 1, aikaleima: '12:00' },
        { id: 2, aihe: 'DataGridPro', viestienlkm: 2, aikaleima: '13:00' },
        { id: 3, aihe: 'MUI', viestienlkm: 1, aikaleima: '12:30' },
      ];

    const columns: GridColDef[] = [
        {field: 'subjectname', headerName: 'Aihe', width: 200},
        {field: 'numberOfMessage', headerName: 'Viestien lkm', width: 200},
        {field: 'aikaleima', headerName: 'Aikaleima', width: 200},
        {field: 'update',
        headerName: '',
        renderCell: row =>
            <button onClick={() => onUpdateClick(row.id)}>
                Update
            </button>
        },
        {field: 'delete',
        headerName: '',
        renderCell: row =>
            <button onClick={() => onDeleteClick(row.id)}>
                Delete
            </button>
        }
    ];
/* Uutta, KESKEN
    const onInsertOne = useCallback( () => {
        const newTestRecord = createOneSubjectRecord();
        data.subjects = [newTestRecord, ...subjects] 
        setSubjects(data.subjects);
    });
*/
    // Fetch subjects, delete
    useEffect(() => {
        fetchSubjects();
    }, []);
    const fetchSubjects = () => {
 /*originaali       fetch(SERVER_URL + 'getSubjects')
        .then(response => {
            if (!response.ok) {
                console.log("Response nok");
            }
            return response.json();
        })
*/ 
//        fetch(SERVER_URL + 'getSubjects')

        SubjectDataService.getAll()
        .then(data => setSubjects(data.data.subjects));
//        .then(data => console.log(data.data.subjects[0]));
//        .then(response => {
//            response.json();
//        })
//        .then(response => console.log(response.data.data.subjects));
//        .then(data => setSubjects(data.subjects));
//        .catch(err => console.error(err));       
    }

    // Delete some subject
    const onDeleteClick = (id: any) => {


        fetch(`${SERVER_URL}deleteSubject/${id}/`, 
        {
            method: 'DELETE',
            headers: { 'Content-Type':'application/json' }
        })
        .then(response => fetchSubjects())
        .catch(err => console.error(err))
    }

    // Update some subject
    const onUpdateClick = (id: any) => {
    
            fetch(`${SERVER_URL}updateSubject/${id}/`, 
            {
                method: 'PUT',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify({"subjectname": "Updated"})
            })
            .then(response => fetchSubjects())
            .catch(err => console.error(err))
    }

    

    return (
        <div style={{height: 300, width: '100%'}}>
        <div>
            <button>Insert One</button>
        </div>
            <DataGrid
                rows={subjects}
                columns={columns} />
            <br />
        </div>
    )
}

export default SubjectsSPA;
