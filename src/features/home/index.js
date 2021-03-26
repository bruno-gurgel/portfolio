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
						<strong>About</strong>
					</Button>
				</Link>
				<Link to="/projects">
					<Button variant="outline-warning" size="lg" className={styles.btn}>
						<strong>Projects</strong>
					</Button>
				</Link>
				<Button variant="outline-warning" size="lg" className={styles.btn}>
					<strong>Contact</strong>
				</Button>
			</div>
		</div>
	);
}
