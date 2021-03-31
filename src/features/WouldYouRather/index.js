import React, { useEffect, useState } from "react";
import styles from "./WouldYouRather.module.css";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { fetchAllData } from "./redux/modules/shared";
import { getAuthedUser } from "./redux/modules/authedUser";
import Authentication from "./components/Authentication";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import Poll from "./components/Poll";
import PageNotFound from "./components/PageNotFound";

export default function WouldYouRather() {
	const dispatch = useDispatch();

	const authedUser = useSelector(getAuthedUser);
	const [isPageNotFound, updateIsPageNotFound] = useState(false);

	useEffect(() => {
		dispatch(fetchAllData());
	}, [dispatch]);

	return (
		<div className={styles.wouldYouRather}>
			<LoadingBar />
			<Route
				path="/WouldYouRather"
				render={() => (!isPageNotFound && authedUser ? <Navigation /> : null)}
			/>
			<Switch>
				<Route path="/WouldYouRather/auth" component={Authentication} />
				<PrivateRoute path="/WouldYouRather/add" component={NewQuestion} />
				<PrivateRoute path="/WouldYouRather/leaderboard" component={Leaderboard} />
				<PrivateRoute path="/WouldYouRather/questions/:id" component={Poll} />
				<PrivateRoute exact path="/WouldYouRather" component={Dashboard} />
				<Route
					path="*"
					render={(props) => (
						<PageNotFound {...props} updateIsPageNotFound={updateIsPageNotFound} />
					)}
				/>
			</Switch>
		</div>
	);
}
