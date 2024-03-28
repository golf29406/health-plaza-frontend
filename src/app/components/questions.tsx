'use client'
import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button, Box, TextField } from '@mui/material';


const Questions = ({ questions, onSubmit, onFinished }: any) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [statusEndgame, setStatusEndgame] = useState(false);
    const [playerName, setPlayerName] = useState("");

    const handleAnswerChange = (event: any) => {
        setSelectedAnswer(event.target.value);
    };

    useEffect(() => {
        if (statusEndgame == true) {
            onFinished(playerName);
            setCurrentQuestion(0)
            setStatusEndgame(false)
            setPlayerName("")
        }
    }, [statusEndgame])

    const handleNextQuestion = () => {
        onSubmit(selectedAnswer, questions[currentQuestion].correctAnswer);
        setSelectedAnswer('');
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setStatusEndgame(true)
        }
    };

    return (
        <Container maxWidth="sm">
            <TextField
                className='playerName'
                value={playerName || ""}
                onChange={(e: any) => setPlayerName(e.target.value)}
                id="outlined-required"
                label="Player Name"
            />
            <Typography variant="h5" gutterBottom>
                Question {currentQuestion + 1} of {questions.length}
            </Typography>
            <FormControl component="fieldset">
                <Typography variant="h6" gutterBottom>
                    {questions[currentQuestion].question}
                </Typography>
                <RadioGroup
                    aria-label="quiz"
                    name="quiz"
                    value={selectedAnswer}
                    onChange={handleAnswerChange}
                >
                    {questions[currentQuestion].answers.map((answer: any, index: number) => (
                        <FormControlLabel
                            key={index}
                            value={answer}
                            control={<Radio />}
                            label={answer}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
            <Box mt={2} display="flex" justifyContent="space-between">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === ''}
                >
                    {currentQuestion + 1 < questions.length ? 'Next' : 'Finish'}
                </Button>
            </Box>
        </Container>
    );
};

export default Questions;
