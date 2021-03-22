import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function MyReads() {
	return (
		<Container>
			<Jumbotron fluid>
				<Container>
					<h1 className="display-3 text-dark">MyReads</h1>
					<h2 className="text-muted">
						Bookshelf app that allows you to select and categorize your books.
					</h2>
					<Link
						to={{ pathname: "https://github.com/bruno-gurgel/MyReads" }}
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
