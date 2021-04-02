import React, { useState } from "react";
import styles from "../WouldYouRather.module.css";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAuthedUser } from "../redux/modules/authedUser";
import { handleNewQuestion } from "../redux/modules/questions";
import { fetchAllData } from "../redux/modules/shared";

export default function NewQuestion() {
	const [optionOneText, updateOptionOneText] = useState("");
	const [optionTwoText, updateOptionTwoText] = useState("");
	const [toHome, updateToHome] = useState(false);

	const dispatch = useDispatch();
	const author = useSelector(getAuthedUser);

	const onSubmit = (event) => {
		event.preventDefault();

		dispatch(handleNewQuestion({ optionOneText, optionTwoText, author })).then(() =>
			dispatch(fetchAllData())
		);
		updateOptionOneText("");
		updateOptionTwoText("");
		updateToHome(true);
	};

	if (toHome === true) {
		return <Redirect to="/WouldYouRather" />;
	}

	return (
		<Container className="card mt-4">
			<h2 className={styles.newQuestionHeading}>Create new Question</h2>
			<h3 className={styles.newQuestionsubHeading}>Complete the question:</h3>
			<h4 className={styles.newQuestionwouldYouRather}>Would you rather...</h4>
			<Form className="mt-4" onSubmit={onSubmit}>
				<input
					placeholder="Question one"
					className={styles.input}
					onChange={(event) => updateOptionOneText(event.target.value)}
				/>

				<p className={styles.orNewQuestion}>OR</p>

				<input
					placeholder="Question two"
					className={styles.input}
					onChange={(event) => updateOptionTwoText(event.target.value)}
				/>

				<button
					type="submit"
					className={`${styles.btn} ${styles.greenBtn} ${styles.btnNewQuestion}`}
					disabled={optionOneText === "" || optionTwoText === ""}
				>
					Submit
				</button>
			</Form>
		</Container>
	);
}
