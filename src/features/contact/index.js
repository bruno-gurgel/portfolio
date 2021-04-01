import React from "react";
import styles from "./Contact.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Contact() {
	return (
		<Container className={styles.contactContainer}>
			<h1 className={styles.heading}>Contact</h1>
			<ul className={styles.contactList}>
				<li>
					<Link
						to={{ pathname: "https://github.com/bruno-gurgel" }}
						target="_blank"
						className={styles.contactLink}
					>
						Github
					</Link>
				</li>
				<li>
					<Link
						to={{ pathname: "https://www.linkedin.com/in/bruno-gurgel/" }}
						target="_blank"
						className={styles.contactLink}
					>
						Linkedin
					</Link>
				</li>
				<li
					onClick={() => {
						navigator.clipboard.writeText("bmg1612@gmail.com");
					}}
					className={styles.contactMailItem}
				>
					<p className={styles.contactMail}>bmg1612@gmail.com</p>
				</li>
			</ul>
		</Container>
	);
}
