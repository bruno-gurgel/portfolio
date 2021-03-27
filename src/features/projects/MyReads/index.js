import React, { useState } from "react";
import styles from "./MyReads.module.css";
import myReadsBanner from "./assets/myreads-banner.png";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import MyReadsPortuguese from "./portuguese/MyReadsPortuguese";
import Navigation from "../../navigation";

export default function MyReads() {
	const [language, updateLanguage] = useState("english");

	if (language === "english") {
		return (
			<Container className={styles.myReadsContainer}>
				<Navigation
					onUpdateLanguage={updateLanguage}
					language={language}
					backLocation="/projects"
				/>
				<Container>
					<h1 className="display-3 text-white mt-4">MyReads</h1>
					<h2 className={styles.subHeading}>
						Bookshelf app that allows you to select and categorize your books.
					</h2>
					<Button variant="warning" size="lg" className={styles.button}>
						<Link
							to={{ pathname: "https://github.com/bruno-gurgel/MyReads" }}
							target="_blank"
							className={styles.buttonLink}
						>
							<strong>Repository</strong>
						</Link>
					</Button>
				</Container>
				<Container className="mt-5">
					<p className={styles.introText}>
						In this project, I had to make a Single Page Application (SPA) that was a
						bookshelf so that the users could organize what they were reading or wanting
						to read.
					</p>
					<p className={styles.introText}>
						I used an API server provided by Udacity and had to lay out the application
						so that it was clean and reusable. I followed along with
						<Link
							to={{ pathname: "https://reactjs.org/docs/thinking-in-react.html" }}
							target="_blank"
							className={styles.pageLink}
						>
							{" "}
							React documentation{" "}
						</Link>{" "}
						suggestions to make the project, but since this was my first project using
						this UI library, there were some things that now I would do differently,
						especially the mock/planning part, that if done correctly saves a lot of
						time later.
					</p>
					<p className={styles.introText}>
						I only used React in this application, always trying to employ best
						practices like avoiding class components. Since I learned React without the
						hooks, I faced some challenges, but I really learned a lot.
					</p>
					<div className={styles.buttonBox}>
						<Button variant="warning" size="lg" className={styles.button}>
							<Link to="/" className={styles.buttonLink}>
								<strong>Here is the project so you can check it.</strong>
							</Link>
						</Button>
					</div>
				</Container>
			</Container>
		);
	} else {
		return <MyReadsPortuguese onUpdateLanguage={updateLanguage} />;
	}
}
