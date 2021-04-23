import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import About from "./features/about";
import Home from "./features/home";
import Projects from "./features/projects";
import IntroMyReads from "./features/projects/intro_MyReads";
import IntroWouldYouRather from "./features/projects/intro_WouldYouRather";
import Contact from "./features/contact";

const MyReads = lazy(() => import("./features/MyReads"));
const WouldYouRather = lazy(() => import("./features/WouldYouRather"));

export default function App() {
	const [language, updateLanguage] = useState("english");
	return (
		<div className="App">
			{/* <Suspense fallback={<Loading />}>
				<Switch>
					<Route path="/about">
						<About language={language} onUpdateLanguage={updateLanguage} />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/projects/MyReads">
						<IntroMyReads language={language} onUpdateLanguage={updateLanguage} />
					</Route>
					<Route path="/projects/WouldYouRather">
						<IntroWouldYouRather
							language={language}
							onUpdateLanguage={updateLanguage}
						/>
					</Route>
					<Route path="/projects">
						<Projects language={language} onUpdateLanguage={updateLanguage} />
					</Route>

					<Route path="/MyReads">
						<MyReads />
					</Route>
					<Route path="/WouldYouRather">
						<WouldYouRather />
					</Route>

					<Route path="/">
						<Home language={language} onUpdateLanguage={updateLanguage} />
					</Route>
				</Switch>
			</Suspense> */}
			<Loading />
		</div>
	);
}

const Loading = () => <div className="loading">Loading</div>;
