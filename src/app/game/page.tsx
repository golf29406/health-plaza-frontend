'use client'
import React, { useEffect, useState } from 'react';
import Questions from '../components/questions';
import Leaderboard from '../components/leaderboard';
import { Typography, Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import data from '../../../public/data.json'
const _ = require('lodash');

const questions = _.shuffle(data);

const Game = () => {
    const [score, setScore] = useState(0);
    const [players, setPlayers] = useState<any>([]);

    const handleAnswerSubmit = (selectedAnswer: number, correctAnswer: number) => {
        if (selectedAnswer === correctAnswer) {
            let newScore = score + 1
            setScore(newScore);
        }
    };

    const handleFinished = (playerName: string) => {
        setPlayers([...players, { name: playerName ? playerName : uuidv4(), score }]);
        setScore(0);
    };

    return (
        <Grid container spacing={2} className="body-game">
            <Grid item xs={6}>
                <Typography variant="h3" align="center" gutterBottom>
                    Question Game
                </Typography>
                <Questions
                    questions={questions}
                    onSubmit={handleAnswerSubmit}
                    onFinished={handleFinished}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5" align="center">
                </Typography>
                <Leaderboard players={players} />
            </Grid>
        </Grid>

    );
};

export default Game;
