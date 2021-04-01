import React from "react";
import styles from "../WouldYouRather.module.css";
import { Form, ProgressBar } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

export default function PoolResults(props) {
	const totalVotes = props.optionOneVotes + props.optionTwoVotes;
	const optionOnePercentage = (100 / (totalVotes / props.optionOneVotes)).toFixed(0);
	const optionTwoPercentage = (100 / (totalVotes / props.optionTwoVotes)).toFixed(0);

	return (
		<div className={styles.pollCard}>
			<h5 className={styles.userCardTitle}> Asked by {props.authorName}</h5>
			<div className="d-flex">
				<div
					className={`${styles.userAvatar} ${styles.avatarPreview}`}
					style={{
						backgroundImage: `url(/${props.authorAvatar})`,
					}}
				/>
				<div className={styles.userDetails}>
					<h5 className="text-left pt-3">Results:</h5>
					<Form>
						<Form.Group className="card">
							<h6 className="font-weight-light card-header">
								{props.optionOne}
								{props.selectedAnswer === "optionOne" && (
									<span className="selected-badge badge badge-pill badge-warning">
										Your answer
									</span>
								)}
							</h6>
							<ProgressBar
								animated
								now={optionOnePercentage}
								label={`${optionOnePercentage}%`}
								variant={props.selectedAnswer === "optionOne" && "warning"}
							/>
							<p className="font-weight-bold">
								{props.optionOneVotes} out of {totalVotes} votes
							</p>
						</Form.Group>
						<Form.Group className="card">
							<h6 className="font-weight-light card-header">
								{props.selectedAnswer === "optionTwo" && (
									<Badge pill variant="warning" className={styles.selectedBadge}>
										Your answer
									</Badge>
								)}
								{props.optionTwo}
							</h6>
							<div>
								<ProgressBar
									animated
									now={optionTwoPercentage}
									label={`${optionTwoPercentage}%`}
									variant={props.selectedAnswer === "optionTwo" && "warning"}
								/>
								<p className="font-weight-bold">
									{props.optionTwoVotes} out of {totalVotes} votes
								</p>
							</div>
						</Form.Group>
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

PoolResults.propTypes = {
	authorName: PropTypes.string.isRequired,
	authorAvatar: PropTypes.string.isRequired,
	optionOne: PropTypes.string.isRequired,
	optionTwo: PropTypes.string.isRequired,
	optionOneVotes: PropTypes.number.isRequired,
	optionTwoVotes: PropTypes.number.isRequired,
	selectedAnswer: PropTypes.string.isRequired,
};
