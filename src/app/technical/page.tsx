'use client'
import React, { useEffect, useState } from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';
const _ = require('lodash');

const Game = () => {
    const [textPrefix, setTextPrefix] = useState("");
    const [arrayPrefix, setArrayPrefix] = useState<any>([]);
    const [prefix, setPrefix] = useState("");

    const handleSubmit = () => {
        // console.log('testtest', arrayPrefix)
        if (arrayPrefix && arrayPrefix.length > 0) {
            let prefixFund = arrayPrefix[0];
            for (let i = 1; i < arrayPrefix.length; i++) {
                while (arrayPrefix[i].indexOf(prefixFund) !== 0) {
                    prefixFund = prefixFund.substring(0, prefixFund.length - 1);
                    if (!prefixFund) return '';
                }
            }
            // console.log('arrayPrefix[0]', prefix)
            setPrefix(prefixFund);
        }
    }

    const handleText = () => {
        // console.log("textPrefix", textPrefix)
        // console.log("arrayPrefix", arrayPrefix)
        let text = [...arrayPrefix]
        text.push(textPrefix)

        setArrayPrefix(text);
        setTextPrefix("");
    }

    const removeText = () => {
        setTextPrefix("");
        setArrayPrefix([]);
        setPrefix("");
    }

    return (
        <Grid container spacing={2} className="body-technical">
            <Grid item xs={12}>
                <Typography variant="h3" align="center" gutterBottom>
                    Technical Test
                </Typography>
                <Grid item xs={12}>
                    <TextField
                        label="text"
                        name="text"
                        value={textPrefix || ''}
                        onChange={(e: any) => setTextPrefix(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={() => handleText()} >
                        Add text
                    </Button>

                    <Button variant="contained" color="success" onClick={() => handleSubmit()}>
                        Calculate
                    </Button>

                    <Button variant="contained" color="warning" onClick={() => removeText()}>
                        Reset
                    </Button>
                </Grid>
                <Grid item xs={12}>Your array : {arrayPrefix}</Grid>
                <Grid item xs={12}>Result : {prefix}</Grid>
            </Grid>
        </Grid>

    );
};

export default Game;
