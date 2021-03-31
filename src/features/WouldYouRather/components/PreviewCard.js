import React from "react";
import styles from "../WouldYouRather.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function PreviewCard(props) {
	return (
		<div className={styles.userCard}>
			<h5 className={styles.userCardTitle}>{props.questionAuthor} asks:</h5>
			<div className="d-flex">
				<div
					className={`${styles.contactAvatar} ${styles.avatarPreview}`}
					style={{
						backgroundImage: `url(${props.avatar})`,
					}}
				/>
				<div className={styles.contactDetails}>
					<h6 className={styles.heading6}>Would you rather:</h6>
					<p className="font-italic">...{props.questionPreview}...</p>
					<Link
						to={`/WouldYouRather//questions/${props.id}`}
						className={`${styles.btn} ${styles.greenBtn}`}
					>
						View Pool
					</Link>
				</div>
			</div>
		</div>
	);
}

PreviewCard.propTypes = {
	id: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	questionAuthor: PropTypes.string.isRequired,
	questionPreview: PropTypes.string.isRequired,
};
