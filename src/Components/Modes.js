import useStyles from './styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import TimeMode from '../BL/Modes/SinglePlayer/TimeMode'
import StaticMode from '../BL/Modes/SinglePlayer/StaticMode'
import ExcludeCardGenerator from '../BL/Generators/CardGenerators/ExcludeCardGenerator'
import SimpleDeckGenerator from '../BL/Generators/DeckGenerators/SimpleDeckGenerator'
import OddOptionsBrain from '../BL/Brains/OddOptionsBrain'
import SimpleReplacer from '../BL/Generators/Replacer/SimpleReplacer';
import '../styles/main.css';

export default function Modes({ }) {

    const classes = useStyles();

    const ATTRIBUTES = 4
    const OPTIONS = 3

    let singlePlayerModes = [
        new TimeMode(
            new SimpleDeckGenerator(12, 6, new OddOptionsBrain(ATTRIBUTES, OPTIONS)),
            new SimpleReplacer(new ExcludeCardGenerator(ATTRIBUTES, OPTIONS), 6),
            60),

        new StaticMode(
            new SimpleDeckGenerator(12, 6, new OddOptionsBrain(ATTRIBUTES, OPTIONS)), 6
        )
    ]

    const tm = singlePlayerModes[1]
    tm.newGame()

    return (
        <div className="p-16">
            <button className="bg-indigo-500 ring-4 ring-indigo-300 py-4 px-6 text-white text-lg font-bold rounded-xl">
                Time Mode
            </button>
            {/* <Button variant="outlined" color="primary">
                <Link to={{
                    pathname: "/game",
                    state: { mode: tm }
                }}>
                    Time Mode
                </Link>
            </Button> */}
        </div>
    );
}
