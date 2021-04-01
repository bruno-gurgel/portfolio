import React from "react";
import styles from "../WouldYouRather.module.css";
import { Link } from "react-router-dom";

export default function PreviewCard(props) {
	return (
		<div className={styles.userCard}>
			<h5 className={styles.userCardTitle}>{props.questionAuthor} asks:</h5>
			<div className="d-flex">
				<div
					className={`${styles.userAvatar} ${styles.avatarPreview}`}
					style={{
						backgroundImage: `url(/${props.avatar})`,
					}}
				/>
				<div className={styles.userDetails}>
					<h6 className="text-left">Would you rather:</h6>
					<p className="font-italic">...{props.questionPreview}...</p>
					<Link
						to={`/WouldYouRather/questions/${props.id}`}
						className={`${styles.btn} ${styles.greenBtn}`}
					>
						View Pool
					</Link>
				</div>
			</div>
		</div>
	);
}
