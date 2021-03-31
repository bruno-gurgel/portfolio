import React from "react";
import styles from "./introWouldYouRather.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Navigation from "../../navigation";
import WouldYouRatherPortuguese from "./PortugueseWouldYouRather";

export default function introWouldYouRather({ language, onUpdateLanguage }) {
	if (language === "portuguese") {
		return <WouldYouRatherPortuguese onUpdateLanguage={onUpdateLanguage} />;
	}
	return (
		<Container className={styles.wouldYouRatherContainer}>
			<Navigation onUpdateLanguage={onUpdateLanguage} language={language} />
			<Container>
				<h1 className={styles.heading}>Would You Rather...</h1>
				<h2 className={styles.subHeading}>
					Variation of the{" "}
					<Link
						to={{
							pathname: "https://en.wikipedia.org/wiki/Would_you_rather",
						}}
						target="_blank"
						className={styles.pageLink}
					>
						Would You Rather game.
					</Link>
				</h2>
				<div className={styles.btnBox}>
					<Link to="/" className={styles.btn}>
						<strong>Project</strong>
					</Link>

					<Link
						to={{
							pathname: "https://github.com/bruno-gurgel/would-you-rather",
						}}
						target="_blank"
						className={styles.btn}
					>
						<strong>Repository</strong>
					</Link>
				</div>
			</Container>
			<Container className="mt-4 text-justify">
				<p className={styles.introText}>
					In this project, I had to make a web app that lets a user play the “Would You
					Rather?” game. The game goes like this: A user is asked a question in the form:
					“Would you rather <span className="text-warning">[option A]</span> or{" "}
					<span className="text-warning">[option B]</span> ?”. Answering "neither" or
					"both" is against the rules.
				</p>
				<p className={styles.introText}>
					I used a fake database that was given by Udacity to contain the initial data so
					that I could focus on React & Redux. In this project I felt much more confident
					in React, so I struggled more in the state control with Redux, but I loved it
					and its simplicity. Also, their
					<Link
						to={{ pathname: "https://redux.js.org/introduction/getting-started" }}
						target="_blank"
						className={styles.pageLink}
					>
						{" "}
						great documentation{" "}
					</Link>{" "}
					made my learning a lot easier.
				</p>
				<p className={styles.introText}>
					I used React with Redux in this application. On the Redux part, I used their{" "}
					<Link
						to={{ pathname: "https://redux-toolkit.js.org/" }}
						target="_blank"
						className={styles.pageLink}
					>
						{" "}
						Toolkit{" "}
					</Link>{" "}
					that abstracts a lot of the complicated parts like reducers and state updates,
					it is really worth a try!
				</p>
			</Container>
		</Container>
	);
}
