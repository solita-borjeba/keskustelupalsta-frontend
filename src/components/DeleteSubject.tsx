import React, { useState, useEffect} from 'react';
import { SERVER_URL } from '../constants';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';


function DeleteSubject() {
    const [subjects, setSubjects] = useState("");

    const testrows: GridRowsProp = [
        { id: 1, aihe: 'Hello', viestienlkm: 1, aikaleima: '12:00' },
        { id: 2, aihe: 'DataGridPro', viestienlkm: 2, aikaleima: '13:00' },
        { id: 3, aihe: 'MUI', viestienlkm: 1, aikaleima: '12:30' },
      ];

    const columns: GridColDef[] = [
        {field: 'aihe', headerName: 'Aihe', width: 200},
        {field: 'viestienlkm', headerName: 'Viestien lkm', width: 200},
        {field: 'aikaleima', headerName: 'Aikaleima', width: 200},
        {
            field: '_link.self.href',
            headerName: '',
            sortable: false,
            renderCell: row =>
                <button onClick={() => onDeleteClick(row.id)}>
                    Delete
                </button>
        }
    ];

    useEffect(() => {
        fetchSubjects();
        console.log("deleteSubject execute.");

    }, []);

    const fetchSubjects = () => {
        fetch( SERVER_URL + 'deleteSubject');
        {/*
            .then(response = response.json())
            .then(data => setSubjects(data._embedded.subjects))
            .catch(err => console.error("jotain outoa tapahtui"));
        */}
    }

    const onDeleteClick = (url: any) => {
        fetch(url, {method: 'DELETE'})
        {/*
            .then(response => fetchSubjects())
            .catch(err => console.error(err))
        */}
    }

    return (
        <div style={{height: 300, width: '100%'}}>
        <br /> <br /> <br />
            <DataGrid
                rows={testrows}
                columns={columns} 
                disableSelectionOnClick={true} />
            <br />
            DeleteSubject näkymä yläpuolella.
        </div>
    )
}

export default DeleteSubject;