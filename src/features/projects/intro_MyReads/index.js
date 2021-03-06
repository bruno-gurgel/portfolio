import React from "react";
import styles from "./introMyReads.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import MyReadsPortuguese from "./MyReadsPortuguese";
import Navigation from "../../navigation";

export default function introMyReads({ language, onUpdateLanguage }) {
	if (language === "portuguese") {
		return <MyReadsPortuguese onUpdateLanguage={onUpdateLanguage} />;
	}
	return (
		<Container className={styles.myReadsContainer}>
			<Navigation onUpdateLanguage={onUpdateLanguage} language={language} />
			<Container>
				<h1 className={styles.heading}>MyReads</h1>
				<h2 className={styles.subHeading}>
					Bookshelf app that allows you to select and categorize your books.
				</h2>
				<div className={styles.btnBox}>
					<Link to="/MyReads" className={styles.btn}>
						<strong>Project</strong>
					</Link>

					<Link
						to={{ pathname: "https://github.com/bruno-gurgel/MyReads" }}
						target="_blank"
						className={styles.btn}
					>
						<strong>Repository</strong>
					</Link>
				</div>
			</Container>
			<Container className="mt-4  text-justify">
				<p className={styles.introText}>
					In this project, I had to make a Single Page Application (SPA) that was a
					bookshelf so that the users could organize what they were reading or wanting to
					read.
				</p>
				<p className={styles.introText}>
					I used an API server provided by Udacity and had to lay out the application so
					that it was clean and reusable. I followed along with
					<Link
						to={{ pathname: "https://reactjs.org/docs/thinking-in-react.html" }}
						target="_blank"
						className={styles.pageLink}
					>
						{" "}
						React documentation{" "}
					</Link>{" "}
					suggestions to make the project, but since this was my first project using this
					UI library, there were some things that now I would do differently, especially
					the mock/planning part, that if done correctly saves a lot of time later.
				</p>
				<p className={styles.introText}>
					I only used React in this application, always trying to employ best practices
					like avoiding class components. Since I learned React without the hooks, I faced
					some challenges, but I really learned a lot.
				</p>
			</Container>
		</Container>
	);
}
