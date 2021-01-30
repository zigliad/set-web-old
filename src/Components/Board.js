import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PlayingCard from './PlayingCard';
import { makeStyles } from '@material-ui/core/styles';

export default function Board({ deck }) {

    const cards = deck.cards.map(card =>
        <Grid item xs={6} sm={4} lg={3} >
            <PlayingCard card={card} />
        </Grid>
    );

    return (
        <Grid container xs={12} spacing={4} alignItems="center" justify="center">
            {cards}
        </Grid>
    );
}
