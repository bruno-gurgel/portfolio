import React from "react";
import styles from "./projects.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Navigation from "../navigation";

export default function ProjectsPortuguese({ onUpdateLanguage }) {
	return (
		<Container className={styles.projectsContainer}>
			<Navigation onUpdateLanguage={onUpdateLanguage} language={"portuguese"} />
			<div className={styles.cardBox}>
				<Card className={styles.card}>
					<Card.Header className={styles.cardHeading}>MyReads</Card.Header>
					<Card.Body className={styles.cardBody}>
						<p className={styles.cardText}>
							Aplicativo de estante virtual que permite selecionar e categorizar os
							livros que você leu, está lendo ou quer ler.
						</p>

						<Link to="/projects/MyReads" className={styles.btnDark}>
							<strong>Detalhes</strong>
						</Link>
					</Card.Body>
				</Card>
				<Card className={styles.card}>
					<Card.Header className={styles.cardHeading}>Would you Rather...</Card.Header>
					<Card.Body className={styles.cardBody}>
						<p className={styles.cardText}>
							Variação do jogo Would You Rather. Feito com Bootstrap, React & Redux.
						</p>

						<Link to="/projects/WouldYouRather" className={styles.btnDark}>
							<strong>Detalhes</strong>
						</Link>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
}
