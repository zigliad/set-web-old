import logo from './logo.svg';
import './App.css';

import TimeMode from './BL/Modes/SinglePlayer/TimeMode'
import SimpleCardGenerator from './BL/Generators/CardGenerators/SimpleCardGenerator'
import SimpleDeckGenerator from './BL/Generators/DeckGenerators/SimpleDeckGenerator'
import OddOptionsBrain from './BL/Brains/OddOptionsBrain'

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
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
        </p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        </a>
			</header>
		</div>
	);
}

export default App;
