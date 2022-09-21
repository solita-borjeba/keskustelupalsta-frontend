import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../constants';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

function SubjectsSPA() {
    const [subjects, setSubjects] = useState<any[]>([])
    const [message, setMessage] = useState("");

    const testrows: GridRowsProp = [ //Turha
        { id: 1, aihe: 'Hello', viestienlkm: 1, aikaleima: '12:00' },
        { id: 2, aihe: 'DataGridPro', viestienlkm: 2, aikaleima: '13:00' },
        { id: 3, aihe: 'MUI', viestienlkm: 1, aikaleima: '12:30' },
      ];

    const columns: GridColDef[] = [
        {field: 'aihe', headerName: 'Aihe', width: 200},
        {field: 'numberOfMessage', headerName: 'Viestien lkm', width: 200},
        {field: 'aikaleima', headerName: 'Aikaleima', width: 200},
        {field: '_link.self.href',
        headerName: '',
        sortable: false,
        renderCell: row =>
            <button>
                Delete
            </button>
        }
];



            {/* "Varasto"
            field: '_link.self.href',
            headerName: '',
            sortable: false,
            renderCell: row =>
                <button onClick={() => onDeleteClick(row.id)}>
                    Delete
                </button>
        */}

    //original VOI POISTAA
{/*
    useEffect(() => {
        console.log("getSubjects execute");

        fetch(SERVER_URL + 'getSubject', {method: 'GET'})
        .then(response => {
            if (!response.ok) {
                console.log("Response nok");
            }
            return response.json();
        })
        .then(data => setSubjects(data.subjects))
        .catch(err => console.error(err));
    }, []);
*/}


    // Fetch subjects, delete
    useEffect(() => {
        fetchSubjects();
    }, []);
    const fetchSubjects = () => {
        fetch(SERVER_URL + 'getSubject')
        .then(response => {
            if (!response.ok) {
                console.log("Response nok");
            }
            return response.json();
        })
        .then(data => setSubjects(data.subjects))
        .catch(err => console.error(err));       
    }
{/*
    // Delete some subject
    const onDeleteClick = (url: any) => {
        fetch(url, {method: 'DELETE'})
        .then(response => fetchSubjects())
        .catch(err => console.error(err))
    }
*/}

    return (
        <div style={{height: 300, width: '100%'}}>
            <DataGrid
                rows={subjects}
                columns={columns} />
            <br />
            GetSubjects 
            
            {
                subjects.map((subject, index) =>
                <tr key={index}>
                    <td>{subject.id}</td>
                    <td>{subject.subject}</td>
                    <td>{subject.message}</td>
                    <td>{subject.aikaleima}</td>
                </tr>
                )
            }           
            xxx
        
        </div>
    )
}

export default SubjectsSPA;
