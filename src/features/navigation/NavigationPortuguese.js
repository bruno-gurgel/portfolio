import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./Navigation.module.css";

export default function NavigationPortuguese({ onUpdateLanguage }) {
	return (
		<div className={styles.navigation}>
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
