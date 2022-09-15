import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../constants';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

function GetSubjects() {
    const [data, setData] = useState<any[]>([])
    const [message, setMessage] = useState("");

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
        console.log("getSubjects execute");

        fetch(SERVER_URL + 'getSubject')
        .then(response => {
            if (!response.ok) {
                console.log("Response nok");
            }
            return response.json();
        })
        .then(data => setData(data.data))
        .catch(err => console.error(err));
 {/*
        .then(responseJson => console.log(responseJson));
    */}
    }, []);

    return (
        <div style={{height: 300, width: '100%'}}>
            <DataGrid
                rows={testrows}
                columns={columns} />
            <br />
            GetSubjects 
            
            {
                data.map((subject, index) =>
                <tr key={index}>
                    <td>{subject.id}</td>
                    <td>{subject.subject}</td>
                    <td>{subject.message}</td>
                    <td>{subject.aikaleima}</td>
                </tr>
                )
            }           
            xx
        
        </div>
    )
}

export default GetSubjects;
