import React from "react";
import styles from "./MyReads.module.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function MyReads() {
	return (
		<Container>
			<Link to="/projects">
				<Button variant="outline-warning" size="lg" className="mt-1">
					<strong>Go back</strong>
				</Button>
			</Link>
			<Container>
				<h1 className="display-3 text-white mt-4">MyReads</h1>
				<h2 className={styles.subHeading}>
					Bookshelf app that allows you to select and categorize your books.
				</h2>
				<Link to={{ pathname: "https://github.com/bruno-gurgel/MyReads" }} target="_blank">
					<Button variant="warning" size="lg">
						<strong>Repository</strong>
					</Button>
				</Link>
			</Container>
		</Container>
	);
}
