import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import About from "./features/about";
import Home from "./features/home";
import Projects from "./features/projects";
import MyReads from "./features/projects/intro_MyReads";
import WouldYouRather from "./features/projects/intro_WouldYouRather";

function App() {
	const [language, updateLanguage] = useState("english");
	return (
		<div className="App">
			<Switch>
				<Route path="/about">
					<About language={language} onUpdateLanguage={updateLanguage} />
				</Route>
				<Route path="/projects/MyReads">
					<MyReads language={language} onUpdateLanguage={updateLanguage} />
				</Route>
				<Route path="/projects/WouldYouRather">
					<WouldYouRather language={language} onUpdateLanguage={updateLanguage} />
				</Route>
				<Route path="/projects">
					<Projects language={language} onUpdateLanguage={updateLanguage} />
				</Route>
				<Route path="/">
					<Home language={language} onUpdateLanguage={updateLanguage} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
