import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../constants';
import AddSubject from './AddSubject';

function Createsubject() {
    const[subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch(SERVER_URL + 'createSubject')
        .then(response => response.json())
    }, []);

    console.log("addSubject execute.");

    const columns: GridColDef[] = [
        {field: 'subject', headerName: 'Aihe', width: 200},
        {field: 'numberOfMessage', headerName: 'Viestien lkm', width: 200},
        {field: 'aikaleima', headerName: 'Aikaleima', width: 200},
    ];


    return(
        {/*
        <React.Fragment>
            <AddSubject addsubject={newsubject} />
            <div style={{ height: 500, width: '100%'}} >
            <DataGrid
                rows={subject}
                columns={columns}
                disableSelectionOnClick={true}
                getRowId={row => row._links.self.href}

            />
            {/*
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                message="Car deleted"
            />
            
            </div>
        </React.Fragment>
        */}
    )

};

export default Createsubject;