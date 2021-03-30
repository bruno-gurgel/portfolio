import React from "react";
import styles from "./projects.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import WouldYouRatherBanner from "../../assets/would-you-rather-banner-1.png";
import { Link } from "react-router-dom";
import Navigation from "../navigation";

export default function ProjectsPortuguese({ onUpdateLanguage }) {
	return (
		<Container className={styles.projectsContainer}>
			<Navigation
				onUpdateLanguage={onUpdateLanguage}
				language={"portuguese"}
				backLocation="/"
			/>
			<div className={styles.cardBox}>
				<Card className={styles.card}>
					<Card.Header className="display-4">MyReads</Card.Header>
					<Card.Body className={styles.cardBody}>
						<Card.Title>
							Aplicativo de estante virtual que permite selecionar e categorizar os
							livros que você leu, está lendo ou quer ler.
						</Card.Title>
						<div className={styles.btnContainer}>
							<Link to="/projects/MyReads">
								<Button variant="dark" size="lg" className={styles.btn}>
									<strong>Detalhes</strong>
								</Button>
							</Link>
						</div>
					</Card.Body>
				</Card>
				<Card className={styles.card}>
					<Card.Header className="display-4">Would you Rather...</Card.Header>
					<Card.Body className={styles.cardBody}>
						<Card.Title>
							Variação do jogo Would You Rather. Feito com Bootstrap, React & Redux.
						</Card.Title>
						<div className={styles.btnContainer}>
							<Link to="/projects/WouldYouRather">
								<Button variant="dark" size="lg" className={styles.btn}>
									<strong>Detalhes</strong>
								</Button>
							</Link>
						</div>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
}
