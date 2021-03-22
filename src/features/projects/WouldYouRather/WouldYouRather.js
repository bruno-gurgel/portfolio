import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function WouldYouRather() {
	return (
		<Container>
			<Jumbotron fluid>
				<Container>
					<h1 className="display-3 text-dark">Would You Rather...</h1>
					<h2 className="text-muted">
						Variation of the{" "}
						<Link
							to={{
								pathname: "https://en.wikipedia.org/wiki/Would_you_rather",
							}}
							target="_blank"
						>
							{" "}
							Would You Rather game.{" "}
						</Link>
					</h2>
					<Link
						to={{
							pathname: "https://github.com/bruno-gurgel/would-you-rather",
						}}
						target="_blank"
					>
						<Button variant="dark" size="lg">
							Repository
						</Button>
					</Link>
				</Container>
			</Jumbotron>
		</Container>
	);
}
