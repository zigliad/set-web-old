import './App.css';

import GamePage from './Components/GamePage';
import MainPage from './Components/MainPage';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

function App() {

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/game" render={(props) => <GamePage {...props} />} />
					<Route path="/">
						<MainPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
