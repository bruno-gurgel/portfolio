import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function NavigationPortuguese({ onUpdateLanguage, onBackClick }) {
	return (
		<div className={styles.navigation}>
			<Link to={onBackClick}>
				<Button variant="outline-warning" size="lg" className={styles.btn}>
					<strong>Voltar</strong>
				</Button>
			</Link>
			<Button
				variant="outline-warning"
				size="lg"
				className={styles.btn}
				onClick={() => onUpdateLanguage("english")}
			>
				<strong>Change to English</strong>
			</Button>
		</div>
	);
}
