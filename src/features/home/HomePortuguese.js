import React, { useState } from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function HomePortuguese({ onUpdateLanguage }) {
	return (
		<div className={styles.home}>
			<Container className={styles.navBtnBox}>
				<Button
					variant="outline-warning"
					size="lg"
					className="mt-1"
					onClick={() => onUpdateLanguage("english")}
				>
					<strong>Change to English</strong>
				</Button>
			</Container>
			<div className={styles.homeMain}>
				<h1 className="display-3">Olá! Meu nome é Bruno, bom te ver aqui.</h1>
				<br />
				<div className={styles.btnContainer}>
					<Link to="/about">
						<Button variant="outline-warning" size="lg" className={styles.btn}>
							<strong>Sobre</strong>
						</Button>
					</Link>
					<Link to="/projects">
						<Button variant="outline-warning" size="lg" className={styles.btn}>
							<strong>Projetos</strong>
						</Button>
					</Link>
					<Button variant="outline-warning" size="lg" className={styles.btn}>
						<strong>Contato</strong>
					</Button>
				</div>
			</div>
		</div>
	);
}
