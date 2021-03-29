import React from "react";
import styles from "./MyReads.module.css";
import { Link } from "react-router-dom";

export default function OpenSearch() {
	return (
		<div className={styles.openSearch}>
			<Link to="/MyReads/search" className={styles.openSearchButton}>
				Add a book
			</Link>
		</div>
	);
}
