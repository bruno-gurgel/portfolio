import styles from "../WouldYouRather.module.css";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import PreviewCard from "./PreviewCard";
import { useSelector } from "react-redux";
import { getQuestions, getSortedQuestionsIDs } from "../redux/modules/questions";
import { getUsers } from "../redux/modules/users";
import { getAuthedUser } from "../redux/modules/authedUser";

export default function Dashboard() {
	const questions = useSelector(getQuestions);
	const sortedQuestionsIDs = useSelector(getSortedQuestionsIDs);
	const users = useSelector(getUsers);
	const authedUser = useSelector(getAuthedUser);

	const [viewAnsweredQuestions, updateViewAnsweredQuestions] = useState(false);

	const questionsAnsweredByAuthedUser = Object.keys(users[authedUser].answers);

	const answeredQuestionsList = sortedQuestionsIDs.filter((question) =>
		questionsAnsweredByAuthedUser.includes(question)
	);

	const questionsNotAnsweredList = sortedQuestionsIDs.filter(
		(question) => !answeredQuestionsList.includes(question)
	);

	const returnPreviewCards = (questionsArray) => {
		if (questionsArray.length === 0) {
			return <h3 className="mt-3 text-danger">No questions to show</h3>;
		}
		return (
			<div className={styles.usersList}>
				{questionsArray.map((questionID) => {
					const questionAuthor = users[questions[questionID].author].name;
					const authorsID = questions[questionID].author;
					const questionPreview = questions[questionID].optionOne.text;
					return (
						<PreviewCard
							key={questionID}
							id={questionID}
							avatar={users[authorsID].avatarURL}
							questionAuthor={questionAuthor}
							questionPreview={questionPreview}
						/>
					);
				})}
			</div>
		);
	};

	return (
		<div className={styles.dashboardContainer}>
			<Row>
				<button
					className={viewAnsweredQuestions ? styles.headingBtn : styles.headingBtnActive}
					active={!viewAnsweredQuestions}
					onClick={() => updateViewAnsweredQuestions(false)}
				>
					<span className={styles.blockBtn}>Unanswered</span> Questions
				</button>

				<button
					className={viewAnsweredQuestions ? styles.headingBtnActive : styles.headingBtn}
					variant="info"
					active={viewAnsweredQuestions}
					onClick={() => updateViewAnsweredQuestions(true)}
				>
					<span className={styles.blockBtn}>Answered</span> Questions
				</button>
			</Row>
			{viewAnsweredQuestions
				? returnPreviewCards(answeredQuestionsList)
				: returnPreviewCards(questionsNotAnsweredList)}
			<div className="p-2" id="icons-attribute">
				Icons made by{" "}
				<a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">
					Icongeek26
				</a>{" "}
				from{" "}
				<a href="https://www.flaticon.com/" title="Flaticon">
					www.flaticon.com
				</a>
			</div>
		</div>
	);
}
