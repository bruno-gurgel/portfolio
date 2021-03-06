import React, { useState } from "react";
import styles from "../WouldYouRather.module.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAuthedUser } from "../redux/modules/authedUser";
import { handleNewAnswer } from "../redux/modules/shared";
import { fetchAllData } from "../redux/modules/shared";

export default function PollVote(props) {
	const dispatch = useDispatch();
	const authedUser = useSelector(getAuthedUser);

	const [selectedAnswer, updateSelectedAnswer] = useState(null);

	const { authorName, authorAvatar, optionOne, optionTwo, questionID } = props;

	const onSubmit = (event) => {
		event.preventDefault();

		dispatch(
			handleNewAnswer({ authedUser, qid: questionID, answer: selectedAnswer })
		).then(() => dispatch(fetchAllData()));
	};
	return (
		<div className={styles.pollCard}>
			<h5 className={styles.userCardTitle}>{authorName} asks:</h5>
			<div className="d-flex">
				<div
					className={`${styles.userAvatar} ${styles.avatarPreview}`}
					style={{
						backgroundImage: `url(/${authorAvatar})`,
					}}
				/>
				<div className={styles.userDetails}>
					<h6 className={styles.heading6}>Would you rather:</h6>
					<Form
						className={styles.pollVoteForm}
						onSubmit={onSubmit}
						onChange={(event) => updateSelectedAnswer(event.target.value)}
					>
						<Form.Check
							type="radio"
							label={optionOne}
							name="pollVote"
							value="optionOne"
							className={styles.pollVoteRadio}
							required
						/>
						<Form.Check
							type="radio"
							label={optionTwo}
							name="pollVote"
							value="optionTwo"
							className={styles.pollVoteRadio}
							required
						/>
						<Button type="submit" className={styles.greenBtn}>
							Submit
						</Button>
					</Form>
				</div>
			</div>
			<div className="p-2 border-top" id="icons-attribute">
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
