import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Home() {
	return (
		<div className={styles.home}>
			<h1 className="display-3">Hi! My name is Bruno, nice to see you here.</h1>
			<br />
			<div className={styles.btnContainer}>
				<Link to="/about">
					<Button variant="outline-warning" size="lg" className={styles.btn}>
						About
					</Button>
				</Link>
				<Link to="/projects">
					<Button variant="outline-warning" size="lg" className={styles.btn}>
						Projects
					</Button>
				</Link>
				<Button variant="outline-warning" size="lg" className={styles.btn}>
					Contact
				</Button>
			</div>
		</div>
	);
}
