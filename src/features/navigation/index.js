import React from "react";
import styles from "./Navigation.module.css";
import NavigationPortuguese from "./NavigationPortuguese";

export default function Navigation({ onUpdateLanguage, language }) {
	if (language === "portuguese") {
		return <NavigationPortuguese onUpdateLanguage={onUpdateLanguage} />;
	}
	return (
		<div className={styles.navigation}>
			<button
				className={styles.btn}
				onClick={() =>
					onUpdateLanguage(language === "portuguese" ? "english" : "portuguese")
				}
			>
				<strong>Mudar para Português</strong>
			</button>
		</div>
	);
}
