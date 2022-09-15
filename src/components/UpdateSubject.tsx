import React, { useState, useEffect} from 'react';
import { SERVER_URL } from '../constants';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DialogActions } from '@mui/material';

function UpdateSubject() {
    const [open, setOpen] = useState(false);
    const[aihe, setAihe] = useState({
        aihenimi: '',
        viesti: ''
    });

    const handlePaivitettavaAihe = () => {
        setOpen(true);
    }
    const handlePaivitettavaAiheClose = () => {
        setOpen(false);
    }


    const handleAihe = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAihe({...aihe, [event.target.name]: event.target.value});
    }




    useEffect(() => {
        fetch( SERVER_URL + 'putSubject');
        console.log("updateSubject execute.");

    }, []);

    return (
        <div>
        <br /> <br /> <br />
        <button onClick={handlePaivitettavaAihe}>Paivitettava aihe</button>
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
                    <button onClick={handlePaivitettavaAiheClose}>Peruuta</button>
                    <button onClick={handlePaivitettavaAiheClose}>Tallenna</button>
            {
            //    </DialogActions>
            
            //</Dialog>
            }
            <br /> <br />
             UpdateSubject näkymä yläpuolella.
        </div>
    )
}

export default UpdateSubject;