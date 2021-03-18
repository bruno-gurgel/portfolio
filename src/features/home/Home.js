import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Home() {
	return (
		<div className="home">
			<h1 className="display-3">Hi! My name is Bruno, nice to see you here.</h1>
			<br />
			<div className="btn-container">
				<Link to="/about">
					<Button variant="outline-warning" size="lg" className="btn">
						About
					</Button>
				</Link>
				<Button variant="outline-warning" size="lg" className="btn">
					Projects
				</Button>
				<Button variant="outline-warning" size="lg" className="btn">
					Contact
				</Button>
			</div>
		</div>
	);
}
