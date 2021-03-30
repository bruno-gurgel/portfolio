import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./Navigation.module.css";
import NavigationPortuguese from "./NavigationPortuguese";

export default function Navigation({ onUpdateLanguage, language }) {
	if (language === "portuguese") {
		return <NavigationPortuguese onUpdateLanguage={onUpdateLanguage} />;
	}
	return (
		<div className={styles.navigation}>
			<Button
				variant="outline-warning"
				size="lg"
				className={styles.btn}
				onClick={() =>
					onUpdateLanguage(language === "portuguese" ? "english" : "portuguese")
				}
			>
				<strong>Mudar para Português</strong>
			</Button>
		</div>
	);
}
