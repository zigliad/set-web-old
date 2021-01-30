import './App.css';

import TimeMode from './BL/Modes/SinglePlayer/TimeMode'
import SimpleCardGenerator from './BL/Generators/CardGenerators/SimpleCardGenerator'
import SimpleDeckGenerator from './BL/Generators/DeckGenerators/SimpleDeckGenerator'
import OddOptionsBrain from './BL/Brains/OddOptionsBrain'
import PlayingCard from './Components/PlayingCard';
import Board from './Components/Board';
import GamePage from './Components/GamePage';

function App() {

	const ATTRIBUTES = 4
	const OPTIONS = 3

	let singlePlayerModes = [
		new TimeMode(
			new SimpleCardGenerator(ATTRIBUTES, OPTIONS),
			new SimpleDeckGenerator(12, 1, new OddOptionsBrain(ATTRIBUTES, OPTIONS)),
			60)
	]

	const tm = singlePlayerModes[0]
	tm.newGame()

	console.log(tm)

	return (
		<div className="App">
			<GamePage mode={tm}/>
		</div>
	);
}

export default App;
