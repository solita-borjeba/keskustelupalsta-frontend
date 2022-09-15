import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../constants';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DialogActions } from '@mui/material';

function AddSubject() {
    const [open, setOpen] = useState(false);
    const[aihe, setAihe] = useState({
        aihenimi: '',
        viesti: ''
    });

    const handleUusiAihe = () => {
        setOpen(true);
    }
    const handleUusiAiheClose = () => {
        setOpen(false);
    }


    const handleAihe = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAihe({...aihe, [event.target.name]: event.target.value});
    }

    useEffect(() => {
        fetch( SERVER_URL + 'addSubject');
        console.log("addSubject execute.");

    }, []);

    return (
        <div>
        <br /> <br /> <br />
            <button onClick={handleUusiAihe}>Uusi aihe</button>
            {
            //<Dialog open={open} onClose={handleUusiAiheClose}>
            //    <DialogTitle>Uusi aihe</DialogTitle>
            //    <DialogContent>
            }
                    <br />
                    <input placeholder="aiheen nimi" name="uusiaihe"
                    value={aihe.aihenimi} onChange={handleAihe} />
                    <br />
                    <input placeholder="viesti" name="viesti"
                    value={aihe.viesti} onChange={handleAihe} />
                    <br />
            {
            //    </DialogContent>
            //    <DialogActions>
            }
                    <button onClick={handleUusiAiheClose}>Peruuta</button>
                    <button onClick={handleUusiAiheClose}>Tallenna</button>
            {
            //    </DialogActions>
            
            //</Dialog>
            }
            <br /> <br />
            AddSubject näkymä yläpuolella.
        </div>
    )

}

export default AddSubject;