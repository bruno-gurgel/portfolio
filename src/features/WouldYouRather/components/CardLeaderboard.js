import React from "react";
import styles from "../WouldYouRather.module.css";

export default function CardLeaderboard(props) {
	return (
		<div className={styles.leaderboardCard}>
			<div
				className={`${styles.userAvatar} ${styles.leaderboardCardAvatar}`}
				style={{
					backgroundImage: `url(/${props.avatar})`,
				}}
			/>
			<div className={styles.userDetails}>
				<h5 className={styles.userCardTitle}>{props.user}</h5>
				<p className="text-left d-flex justify-content-between mt-3 font-weight-bold">
					Answered questions<span>{props.answeredQuestions}</span>
				</p>
				<p className="text-left d-flex justify-content-between border-top pt-2 font-weight-bold">
					Created questions<span>{props.createdQuestions}</span>
				</p>
			</div>
			<div className="ml-3 d-flex flex-column justify-content-between">
				<h6 className={styles.scoreCardTitle}>Score</h6>
				<p className={styles.scoreCircle}>{props.score}</p>
			</div>
		</div>
	);
}
