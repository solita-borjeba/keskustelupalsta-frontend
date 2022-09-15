import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../constants';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

function GetSubjects() {
    const [subjects, setSubjects] = useState([]);

    const testrows: GridRowsProp = [
        { id: 1, aihe: 'Hello', viestienlkm: 1, aikaleima: '12:00' },
        { id: 2, aihe: 'DataGridPro', viestienlkm: 2, aikaleima: '13:00' },
        { id: 3, aihe: 'MUI', viestienlkm: 1, aikaleima: '12:30' },
      ];

    const columns: GridColDef[] = [
        {field: 'aihe', headerName: 'Aihe', width: 200},
        {field: 'viestienlkm', headerName: 'Viestien lkm', width: 200},
        {field: 'aikaleima', headerName: 'Aikaleima', width: 200},
    ];

    useEffect(() => {
        fetch(SERVER_URL + 'getSubjects');
        console.log("getSubjects execute");

    }, []);

    return (
        <div style={{height: 300, width: '100%'}}>
            <DataGrid
                rows={testrows}
                columns={columns} />
            <br />
            GetSubjects näkymä yläpuolella.
            
        </div>
    )
}

export default GetSubjects;
