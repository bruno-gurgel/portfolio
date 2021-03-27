import React, { useState } from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import HomePortuguese from "./HomePortuguese.js";

export default function Home() {
	const [language, updateLanguage] = useState("english");

	if (language === "english") {
		return (
			<div className={styles.home}>
				<Container className={styles.navBtnBox}>
					<Button
						variant="outline-warning"
						size="lg"
						className="mt-1"
						onClick={() => updateLanguage("portuguese")}
					>
						<strong>Mudar para Português</strong>
					</Button>
				</Container>
				<div className={styles.homeMain}>
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
			</div>
		);
	} else {
		return <HomePortuguese onUpdateLanguage={updateLanguage} />;
	}
}
