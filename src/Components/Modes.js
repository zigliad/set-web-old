import { Link } from "react-router-dom";

import TimeMode from '../BL/Modes/SinglePlayer/TimeMode'
import StaticMode from '../BL/Modes/SinglePlayer/StaticMode'
import ExcludeCardGenerator from '../BL/Generators/CardGenerators/ExcludeCardGenerator'
import SimpleDeckGenerator from '../BL/Generators/DeckGenerators/SimpleDeckGenerator'
import OddOptionsBrain from '../BL/Brains/OddOptionsBrain'
import SimpleReplacer from '../BL/Generators/Replacer/SimpleReplacer';
import '../styles/main.css';

export default function Modes({ }) {

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
            <button className="bg-indigo-500 ring-4 ring-indigo-300 py-4 px-6 text-white text-lg font-bold font-serif rounded-xl">
                <Link to={{
                    pathname: "/game",
                    state: { mode: tm }
                }}>
                    Time Mode
                </Link>
            </button>
            <button className="bg-yellow-500 ring-4 ring-yellow-300 ring-opacity-50 py-4 px-6 text-white text-lg font-bold font-serif rounded-xl">
                <Link to={{
                    pathname: "/game",
                    state: { mode: tm }
                }}>
                    Time Mode
                </Link>
            </button>
        </div>
    );
}
