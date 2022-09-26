import React, { useCallback, useEffect, useState } from 'react';
import { SERVER_URL } from '../config/constants';
import { DataGrid, GridColDef, GridRowsProp, useGridApiRef } from '@mui/x-data-grid';
import SubjectDataService from '../services/SubjectDataService';

function Keskustelupalsta() {
    const [subjects, setSubjects] = useState<any[]>([])
    
    const testrows: GridRowsProp = [ //Turha
        { id: 1, aihe: 'Hello', viestienlkm: 1, aikaleima: '12:00' },
        { id: 2, aihe: 'DataGridPro', viestienlkm: 2, aikaleima: '13:00' },
        { id: 3, aihe: 'MUI', viestienlkm: 1, aikaleima: '12:30' },
      ];

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'id', width: 200},
        {field: 'subjectname', headerName: 'Aihe', width: 200},
        {field: 'numberOfMessage', headerName: 'Viestien lkm', width: 200},
        {field: 'aikaleima', headerName: 'Aikaleima', width: 200},
        {field: 'delete',
        headerName: '',
        renderCell: row =>
            <button onClick={() => onDeleteClick(row.id)}>
                Delete
            </button>
        }
    ];

    const getRowId = ((row: any) => console.log(row));
    //    (row) => row.id;
    
    // Fetch subjects
    useEffect(() => {
        fetchSubjects();
    }, []);

    const fetchSubjects = () => {
        SubjectDataService.getAll()
        .then(data => setSubjects(data.data.subjects));
    }

    // Delete some subject
    const onDeleteClick = (id: any) => {
        SubjectDataService.delete(id)
        .then(response => fetchSubjects());
    }

    // Update some subject
    const onUpdateClick = (id: any) => {
//        SubjectDataService.update()
//        const rowIds = apiRef.current.getAllRowIds();
//        console.log('BB id: ' + rowIds.id);
/*        
            fetch(`${SERVER_URL}updateSubject/${id}/`, 
            {
                method: 'PUT',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify({"subjectname": "Updated"})
            })
            .then(response => fetchSubjects())
            .catch(err => console.error(err))
*/
    }



    return (
        <div style={{height: 300, width: '100%'}}>
            <DataGrid
                rows={subjects}
                columns={columns} 
                />
            <br />
        </div>
    )
}

export default Keskustelupalsta;
