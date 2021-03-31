import React from "react";
import styles from "./Navigation.module.css";

export default function NavigationPortuguese({ onUpdateLanguage }) {
	return (
		<div className={styles.navigation}>
			<button className={styles.btn} onClick={() => onUpdateLanguage("english")}>
				<strong>Change to English</strong>
			</button>
		</div>
	);
}
