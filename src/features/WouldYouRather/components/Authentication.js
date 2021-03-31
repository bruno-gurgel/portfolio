import React, { useState } from "react";
import styles from "../WouldYouRather.module.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { handleNewUser, getUsers } from "../redux/modules/users";
import { useDispatch, useSelector } from "react-redux";
import { doAuthedUser } from "../redux/modules/authedUser";
import Alert from "react-bootstrap/Alert";
import { Redirect } from "react-router-dom";
import { hideLoading, showLoading } from "react-redux-loading-bar";

export default function Authentication(props) {
	const [newUsername, updatenewUsername] = useState("");
	const [newFullName, updatenewFullName] = useState("");
	const [gender, updateGender] = useState(null);
	const [selectedUser, updateSelectedUser] = useState(null);
	const [showAlert, updateShowAlert] = useState(false);
	const [isAuthorized, updateIsAuthorized] = useState(false);

	const { redirectedFrom } = props.location.state || {
		redirectedFrom: {
			pathname: "/WouldYouRather",
		},
	};

	const users = useSelector(getUsers);
	const dispatch = useDispatch();

	const handleSelectChange = (event) => {
		event.target.value !== "Select an user"
			? updateSelectedUser(event.target.value)
			: updateSelectedUser(null);
	};

	const handleLogIn = (event) => {
		event.preventDefault();

		dispatch(doAuthedUser(selectedUser));
		updateIsAuthorized(true);
	};

	const handleInputChange = (event) => {
		if (event.target.name === "Username Input") {
			updatenewUsername(event.target.value);
		} else {
			updatenewFullName(event.target.value);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!users[newUsername]) {
			dispatch(showLoading());
			return dispatch(handleNewUser({ newFullName, newUsername, gender })).then(() => {
				dispatch(doAuthedUser(newUsername));
				updateIsAuthorized(true);
				dispatch(hideLoading());
			});
		} else {
			updateShowAlert(true);
		}
	};

	if (isAuthorized === true) {
		return <Redirect to={redirectedFrom} />;
	}

	return (
		<Container className="card bg-light w-75 mt-5 p-0">
			<Form onSubmit={handleLogIn}>
				<Card.Header>
					<h1 className={styles.authCardTitle}>Would you rather...</h1>
				</Card.Header>

				<h2 className={styles.authCardSubTitle}>Please Sign in</h2>
				<Form.Group controlId="formUserSelect" className="mt-3">
					<select
						className={styles.input}
						onChange={handleSelectChange}
						defaultValue={selectedUser}
					>
						<option>Select an user</option>
						{Object.keys(users).map((userID) => {
							const userName = users[userID].name;
							return (
								<option key={userID} value={userID}>
									{userName}
								</option>
							);
						})}
					</select>

					<button
						type="submit"
						className={`${styles.btn} ${styles.blueBtn}`}
						disabled={selectedUser === null}
					>
						Login
					</button>
				</Form.Group>
			</Form>
			<h3 className={styles.heading3}>
				Don't have an account? <span className="text-info">Sign up!</span>
			</h3>
			{showAlert && (
				<Alert variant="danger" onClose={() => updateShowAlert(false)} dismissible={true}>
					Username already in use, please choose another
				</Alert>
			)}
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="formNewUser" className="form-new-user mx-auto">
					<input
						type="text"
						placeholder="Enter your first and last name"
						className={styles.input}
						name="Full Name Input"
						onChange={handleInputChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId="formNewUser" className="form-new-user mx-auto">
					<input
						type="text"
						placeholder="Enter an Username"
						className={styles.input}
						name="Username Input"
						onChange={handleInputChange}
						required
					/>
				</Form.Group>
				<Form.Group
					controlId="formNewUser"
					className={styles.radioForm}
					onChange={(event) => updateGender(event.target.value)}
				>
					<Form.Check
						inline
						type="radio"
						label="Male"
						name="genderRadio"
						value="male"
						className={styles.radioBtn}
						required
					/>
					<Form.Check
						inline
						type="radio"
						label="Female"
						name="genderRadio"
						value="female"
						className={styles.radioBtn}
						required
					/>
					<Form.Check
						inline
						type="radio"
						label="Other"
						name="genderRadio"
						value="other"
						className={styles.radioBtn}
						required
					/>
				</Form.Group>
				<button
					className={`${styles.btn} ${styles.blueBtn}`}
					disabled={newFullName === "" || newUsername === "" || gender === null}
				>
					Sign Up
				</button>
			</Form>
		</Container>
	);
}
