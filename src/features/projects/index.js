import React, { useState } from "react";
import styles from "./projects.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import WouldYouRatherBanner from "../../assets/would-you-rather-banner-1.png";
import { Link } from "react-router-dom";
import ProjectsPortuguese from "./ProjectsPortuguese";
import Navigation from "../navigation";

export default function Projects({ language, onUpdateLanguage }) {
	if (language === "portuguese") {
		return <ProjectsPortuguese onUpdateLanguage={onUpdateLanguage} />;
	}

	return (
		<Container className={styles.projectsContainer}>
			<Navigation onUpdateLanguage={onUpdateLanguage} language={language} backLocation="/" />
			<div className={styles.cardBox}>
				<Card className={styles.card}>
					<Card.Header className="display-4">MyReads</Card.Header>
					<Card.Body className={styles.cardBody}>
						<Card.Title>
							Bookshelf app made with React that allows you to select and categorize
							books you have read, are currently reading, or want to read.
						</Card.Title>
						<div className={styles.btnContainer}>
							<Link to="/projects/MyReads">
								<Button variant="dark" size="lg">
									<strong>Details</strong>
								</Button>
							</Link>
						</div>
					</Card.Body>
				</Card>
				<Card className={styles.card}>
					<Card.Header className="display-4">Would you Rather...</Card.Header>
					<Card.Body className={styles.cardBody}>
						<Card.Title>
							Variation of the Would You Rather game. made with Bootstrap, React &
							Redux.
						</Card.Title>
						<div className={styles.btnContainer}>
							<Link to="/projects/WouldYouRather">
								<Button variant="dark" size="lg">
									<strong>Details</strong>
								</Button>
							</Link>
						</div>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
}
