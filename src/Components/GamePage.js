import { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PlayingCard from './PlayingCard';
import Board from './Board';
import Deck from '../BL/Deck'
import { useLocation, Link } from "react-router-dom";

// Create your forceUpdate hook
function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function NoMode() {
    return (
        <div>
            <h1>No mode!</h1>
            <Link to="/" />
        </div>
    );
}

export default function GamePage() {

    const location = useLocation()
    const mode = location.state.mode

    const forceUpdate = useForceUpdate()

    const Header = mode.bindedHeaderComponent()
    const Endgame = mode.bindedEndgameComponent()

    useEffect(() => {
        mode.observe(forceUpdate)
    }, [])

    const checkSet = (indexes) => {
        // Just for ui...
        // Maybe play a sound or something.
        if (mode.checkSet(indexes)) {
            // Set.
            forceUpdate()
        } else {
            // Not a set.
        }
    }

    const sets = mode.deck.getSets().map((set, i) => {
        return (
            <Grid item xs={12} key={i}>
                <Board deck={new Deck(set, mode.brain)} checkSet={() => { }} />
            </Grid>
        );
    })

    return (
        <div style={{ padding: 24 }}>
            <Grid container spacing={4} alignItems="stretch" justify="space-between">
                {
                    mode.gameEnded &&
                    <Grid item xs={12}>
                        <Endgame />
                    </Grid>
                }
                {
                    !mode.gameEnded &&
                    <Grid item xs={12} lg={3}>
                        <div className="bg-white dark:bg-gray-600 shadow-2xl rounded-2xl flex justify-center items-center p-4">
                            <Header />
                            {/* <Grid container spacing={2}>
                                    {sets}
                                </Grid> */}
                        </div>
                    </Grid>
                }
                {
                    !mode.gameEnded &&
                    <Grid item xs={12} lg={9}>
                        <Board deck={mode.deck} checkSet={checkSet} />
                    </Grid>
                }
                {/* {
                    sets
                } */}
            </Grid>
        </div>
    );

}
