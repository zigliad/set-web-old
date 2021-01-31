import './App.css';

import TimeMode from './BL/Modes/SinglePlayer/TimeMode'
import ExcludeCardGenerator from './BL/Generators/CardGenerators/ExcludeCardGenerator'
import SimpleDeckGenerator from './BL/Generators/DeckGenerators/SimpleDeckGenerator'
import OddOptionsBrain from './BL/Brains/OddOptionsBrain'
import PlayingCard from './Components/PlayingCard';
import Board from './Components/Board';
import GamePage from './Components/GamePage';
import SimpleReplacer from './BL/Generators/Replacer/SimpleReplacer';

function App() {

	const ATTRIBUTES = 4
	const OPTIONS = 3

	let singlePlayerModes = [
		new TimeMode(
			new SimpleDeckGenerator(12, 6, new OddOptionsBrain(ATTRIBUTES, OPTIONS)),
			new SimpleReplacer(new ExcludeCardGenerator(ATTRIBUTES, OPTIONS), 6),
			60)
	]

	const tm = singlePlayerModes[0]
	tm.newGame()

	return (
		<div className="App">
			<GamePage mode={tm} />
		</div>
	);
}

export default App;
