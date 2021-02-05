import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PlayingCard from './PlayingCard';

export default function Board({ deck, checkSet }) {

    const [clicked, setClicked] = useState([])

    const cardClicked = (card, index) => {
        let newClicked = clicked.slice()

        var indexOfIndex = newClicked.indexOf(index);
        if (indexOfIndex > -1) {
            newClicked.splice(indexOfIndex, 1)
        } else {
            newClicked.push(index)
        }

        if (newClicked.length === deck.brain.options) {
            checkSet(newClicked)
            setClicked([])
        } else {
            setClicked(newClicked)
        }
    }

    const cards = deck.cards.map((card, index) =>
        <Grid item xs={6} sm={4} md={3} key={card.toString()}>
            <PlayingCard card={card} onClick={() => cardClicked(card, index)} picked={clicked.includes(index)} />
        </Grid>
    );

    return (
        <Grid container spacing={4}>
            {cards}
        </Grid>
    );
}
