import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomePortuguese from "./HomePortuguese.js";

export default function Home({ language, onUpdateLanguage }) {
	if (language === "portuguese") {
		return <HomePortuguese onUpdateLanguage={onUpdateLanguage} />;
	}
	return (
		<div className={styles.home}>
			<Container className={styles.navBtnBox}>
				<button className={styles.btn} onClick={() => onUpdateLanguage("portuguese")}>
					<strong>Mudar para Português</strong>
				</button>
			</Container>
			<div className={styles.homeMain}>
				<h1 className={styles.heading}>Hi! My name is Bruno, nice to see you here.</h1>
				<br />
				<div className={styles.btnContainer}>
					<Link to="/about" className={styles.btn}>
						<strong>About</strong>
					</Link>
					<Link to="/projects" className={styles.btn}>
						<strong>Projects</strong>
					</Link>
					<Link to="/contact" className={styles.btn}>
						<strong>Contact</strong>
					</Link>
				</div>
			</div>
		</div>
	);
}
