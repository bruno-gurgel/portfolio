import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function HomePortuguese({ onUpdateLanguage }) {
	return (
		<div className={styles.home}>
			<Container className={styles.navBtnBox}>
				<button className={styles.btn} onClick={() => onUpdateLanguage("english")}>
					<strong>Change to English</strong>
				</button>
			</Container>
			<div className={styles.homeMain}>
				<h1 className={styles.heading}>Olá! Eu sou Bruno, bom te ver aqui.</h1>
				<br />
				<div className={styles.btnContainer}>
					<Link to="/about" className={styles.btn}>
						<strong>Sobre</strong>
					</Link>
					<Link to="/projects" className={styles.btn}>
						<strong>Projetos</strong>
					</Link>
					<Link to="/contact" className={styles.btn}>
						<strong>Contato</strong>
					</Link>
				</div>
			</div>
		</div>
	);
}
