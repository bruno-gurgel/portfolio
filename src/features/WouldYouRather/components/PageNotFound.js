import React, { useEffect } from "react";
import styles from "../WouldYouRather.module.css";
import { Link } from "react-router-dom";

export default function PageNotFound(props) {
	const { updateIsPageNotFound } = props;

	useEffect(() => {
		updateIsPageNotFound(true);
		return () => {
			updateIsPageNotFound(false);
		};
	}, [updateIsPageNotFound]);

	return (
		<div className="page-wrap d-flex flex-row align-items-center">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12 text-center">
						<span className="display-1 d-block">404</span>
						<div className="mb-4 lead">The page you are looking for was not found.</div>

						<Link
							to="/WouldYouRather"
							className={`${styles.btn} ${styles.blueBtn} ${styles.btnLink}`}
						>
							Back to Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
