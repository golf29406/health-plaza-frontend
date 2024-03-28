'use client'
import React from 'react';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Container, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const Leaderboard = ({ players }: any) => {
  players.sort((a: any, b: any) => b.score - a.score);
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Leaderboard
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player: any, index: any) => (
              <TableRow key={index}>
                <TableCell>
                  {index == 0 && <WorkspacePremiumIcon className='gold' />}
                  {index == 1 && <WorkspacePremiumIcon className='silver' />}
                  {index == 2 && <WorkspacePremiumIcon className='bronze' />} {index + 1}</TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Leaderboard;
