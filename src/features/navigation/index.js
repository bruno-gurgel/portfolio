import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import NavigationPortuguese from "./NavigationPortuguese";

export default function Navigation({ onUpdateLanguage, language, backLocation }) {
	if (language === "portuguese") {
		return (
			<NavigationPortuguese onUpdateLanguage={onUpdateLanguage} onBackClick={backLocation} />
		);
	}
	return (
		<div className={styles.navigation}>
			<Link to={backLocation}>
				<Button variant="outline-warning" size="lg" className="mt-1">
					<strong>Go back</strong>
				</Button>
			</Link>
			<Button
				variant="outline-warning"
				size="lg"
				className="mt-1"
				onClick={() =>
					onUpdateLanguage(language === "portuguese" ? "english" : "portuguese")
				}
			>
				<strong>Mudar para Português</strong>
			</Button>
		</div>
	);
}
