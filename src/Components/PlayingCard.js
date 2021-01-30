import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import cardsSvgs from '../cards-svg/svgsLoader';
import './main.css'

const useStyles = makeStyles({
    card: {
        borderRadius: 16
    }
})

const colors = [
    ["#52D95D", "#FF0188", "#A2A0DF"]
]

export default function PlayingCard({ card }) {

    const classes = useStyles();

    let cardString = card.attributes
        .map(attr => `${attr + 1}`)
        .reduce((a1, a2) => a1 + a2, "")

    const color = colors[0][cardString[cardString.length - 1] - 1]
    cardString = cardString.slice(0, -1) // For the image, ignore the color attribute

    const cardClicked = () => {
        console.log(cardString)
    }

    const CardImage = cardsSvgs[cardString]

    return (
        <Paper elevation={6} onClicke={cardClicked} className={classes.card}>
            <CardImage fill={color} stroke={color} className="rotate"/>
        </Paper>
    );
}
