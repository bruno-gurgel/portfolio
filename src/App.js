import "./App.css";
import { Route, Switch } from "react-router";
import About from "./features/about";
import Home from "./features/home";
import Projects from "./features/projects";
import MyReads from "./features/projects/MyReads";
import WouldYouRather from "./features/projects/WouldYouRather";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/projects/MyReads">
					<MyReads />
				</Route>
				<Route path="/projects/WouldYouRather">
					<WouldYouRather />
				</Route>
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
