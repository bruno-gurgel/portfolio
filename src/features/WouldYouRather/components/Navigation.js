import React from "react";
import styles from "../WouldYouRather.module.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { doAuthedUser, getAuthedUser } from "../redux/modules/authedUser";
import { getUsers } from "../redux/modules/users";

export default function Navigation() {
	const users = useSelector(getUsers);
	const authedUser = useSelector(getAuthedUser);
	const dispatch = useDispatch();

	const authedUserName = users[authedUser].name;

	return (
		<Nav variant="pills" defaultActiveKey="/" className={styles.nav}>
			<Nav.Link as={NavLink} exact to="/WouldYouRather" className={styles.navItem}>
				Home
			</Nav.Link>
			<Nav.Link as={NavLink} to="/WouldYouRather/add" className={styles.navItem}>
				New Question
			</Nav.Link>
			<Nav.Link as={NavLink} to="/WouldYouRather/leaderboard" className={styles.navItem}>
				Leaderboard
			</Nav.Link>

			<NavDropdown
				title={`Hello, ${authedUserName}`}
				id="nav-dropdown"
				className={styles.navDropdown}
			>
				<NavDropdown.Item
					as={NavLink}
					exact
					to="/WouldYouRather"
					className={`${styles.navDropdownItem} ${styles.active} ${styles.responsiveNavItems}`}
				>
					Home
				</NavDropdown.Item>
				<NavDropdown.Item
					as={NavLink}
					exact
					to="/WouldYouRather/add"
					className={`${styles.navDropdownItem} ${styles.active} ${styles.responsiveNavItems}`}
				>
					New Question
				</NavDropdown.Item>
				<NavDropdown.Item
					as={NavLink}
					exact
					to="/WouldYouRather/leaderboard"
					className={`${styles.navDropdownItem} ${styles.active} ${styles.responsiveNavItems}`}
				>
					Leaderboard
				</NavDropdown.Item>
				<NavDropdown.Item
					as={NavLink}
					exact
					to="/WouldYouRather/auth"
					className={`${styles.navDropdownItem} ${styles.active}`}
					onClick={() => dispatch(doAuthedUser(null))}
				>
					Logout
				</NavDropdown.Item>
			</NavDropdown>
		</Nav>
	);
}
