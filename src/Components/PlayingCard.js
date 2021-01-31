import Paper from '@material-ui/core/Paper';
import cardsSvgs from '../cards-svg/svgsLoader';
import useStyles from './styles';
import './main.css'

const colors = [
    ["#52D95D", "#FF0188", "#A2A0DF"]
]

export default function PlayingCard({ card, onClick, picked }) {

    const classes = useStyles();

    let cardString = card.attributes
        .map(attr => `${attr + 1}`)
        .reduce((a1, a2) => a1 + a2, "")

    const color = colors[0][cardString[cardString.length - 1] - 1]
    // const color2 = colors[0][cardString[cardString.length - 2] - 1]
    // cardString = cardString.slice(0, -2)
    cardString = cardString.slice(0, -1) // For the image, ignore the color attribute

    const CardImage = cardsSvgs[cardString]

    return (
        <Paper
            elevation={6}
            onClick={onClick}
            className={`${classes.borderRadius} ${picked ? classes.picked : classes.unpicked}`}>
            <CardImage fill={color} stroke={color} className="rotate card-image" />
            {/* <div style={{backgroundColor: color2, height: 20}}></div> */}
        </Paper>
    );
}
