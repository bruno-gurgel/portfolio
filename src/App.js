import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
	return (
		<div className="App ">
			<h1 className="display-4">Hi! My name is Bruno, nice to see you here.</h1>
			<br />
			<Button variant="outline-warning" size="lg" className=" btn mb-4 w-25">
				Projects
			</Button>
			<Button variant="outline-warning" size="lg" className="btn w-25">
				About
			</Button>
		</div>
	);
}

export default App;
