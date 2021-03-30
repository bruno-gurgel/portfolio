import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import styles from "./MyReads.module.css";
import OpenSearch from "./OpenSearch";
import Search from "./Search";
import Shelfs from "./Shelfs";
import { Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function MyReads() {
	const [didMount, setDidMount] = useState(false);
	const [booksArray, handleBooks] = useState([]);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		setProgress(1);
		BooksAPI.getAll().then((books) => {
			handleBooks(books);
			setDidMount(true);
			setProgress(100);
		});
	}, []);

	const updateBookShelf = async (bookToUpdate, shelfToUpdate) => {
		setProgress(1);
		await BooksAPI.update(bookToUpdate, shelfToUpdate).then(async (updatedShelf) => {
			const changeToArray = Object.values(updatedShelf).flat();
			const booksInfoArray = await Promise.all(
				changeToArray.map((bookID) => BooksAPI.get(bookID))
			);
			handleBooks(booksInfoArray);
			setDidMount(true);
		});
		setProgress(100);
	};

	return (
		<div className={styles.myReads}>
			<LoadingBar progress={progress} onLoaderFinished={() => setProgress(0)} />
			<Route
				path="/MyReads/search"
				render={() => <Search booksArray={booksArray} updateShelf={updateBookShelf} />}
			/>
			<Route
				exact
				path="/MyReads"
				render={() => (
					<div className={styles.listBooks}>
						<div className={styles.listBooksTitle}>
							<h1>MyReads</h1>
						</div>
						<div className={styles.listBooksContent}>
							{didMount && (
								<Shelfs
									booksArray={booksArray}
									updateShelf={updateBookShelf}
									setProgress={setProgress}
								/>
							)}
						</div>
						<OpenSearch />
					</div>
				)}
			/>
		</div>
	);
}
