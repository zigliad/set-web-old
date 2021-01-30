import { useState, useRef, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PlayingCard from './PlayingCard';
import { makeStyles } from '@material-ui/core/styles';
import Board from './Board';

export default function GamePage({ mode }) {


    const Header = mode.header()

    return (
        <Grid container xs={12} spacing={4} alignItems="center" justify="center">
            <Grid item xs={12}>
                <Paper>
                    <Header mode={mode} />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Board deck={mode.deck} />
            </Grid>
        </Grid>
    );
}
