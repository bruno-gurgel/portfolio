import React from "react";
import styles from "./WouldYouRather.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function WouldYouRather() {
	return (
		<Container>
			<Link to="/projects">
				<Button variant="outline-warning" size="lg" className="mt-1">
					<strong>Go back</strong>
				</Button>
			</Link>
			<Container>
				<h1 className="display-3 text-white mt-4">Would You Rather...</h1>
				<h2 className={styles.subHeading}>
					Variation of the{" "}
					<Link
						to={{
							pathname: "https://en.wikipedia.org/wiki/Would_you_rather",
						}}
						target="_blank"
					>
						Would You Rather game.
					</Link>
				</h2>
				<Link
					to={{
						pathname: "https://github.com/bruno-gurgel/would-you-rather",
					}}
					target="_blank"
				>
					<Button variant="warning" size="lg">
						<strong>Repository</strong>
					</Button>
				</Link>
			</Container>
		</Container>
	);
}
