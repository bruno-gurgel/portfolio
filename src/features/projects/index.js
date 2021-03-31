import React from "react";
import styles from "./projects.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ProjectsPortuguese from "./ProjectsPortuguese";
import Navigation from "../navigation";

export default function Projects({ language, onUpdateLanguage }) {
	if (language === "portuguese") {
		return <ProjectsPortuguese onUpdateLanguage={onUpdateLanguage} />;
	}

	return (
		<Container className={styles.projectsContainer}>
			<Navigation onUpdateLanguage={onUpdateLanguage} language={language} />
			<div className={styles.cardBox}>
				<Card className={styles.card}>
					<Card.Header className={styles.cardHeading}>MyReads</Card.Header>
					<Card.Body className={styles.cardBody}>
						<p className={styles.cardText}>
							Bookshelf app made with React that allows you to select and categorize
							books you have read, are currently reading, or want to read.
						</p>

						<div className={styles.btnContainer}>
							<Link to="/projects/MyReads" className={styles.btnDark}>
								<strong>Details</strong>
							</Link>
						</div>
					</Card.Body>
				</Card>
				<Card className={styles.card}>
					<Card.Header className={styles.cardHeading}>Would you Rather...</Card.Header>
					<Card.Body className={styles.cardBody}>
						<p className={styles.cardText}>
							Variation of the Would You Rather game. made with Bootstrap, React &
							Redux.
						</p>
						<div className={styles.btnContainer}>
							<Link to="/projects/WouldYouRather" className={styles.btnDark}>
								<strong>Details</strong>
							</Link>
						</div>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
}
