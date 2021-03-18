import "./App.css";
import { Route, Switch } from "react-router";
import About from "./features/about/About";
import Home from "./features/home/Home";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
