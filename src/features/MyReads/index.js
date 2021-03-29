import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import styles from "./MyReads.module.css";
import OpenSearch from "./OpenSearch";
import Search from "./Search";
import Shelfs from "./Shelfs";
import { Route } from "react-router-dom";

export default function MyReads() {
	const [didMount, setDidMount] = useState(false);
	const [booksArray, handleBooks] = useState([]);
	useEffect(() => {
		BooksAPI.getAll().then((books) => {
			handleBooks(books);
			setDidMount(true);
		});
	}, []);

	const updateBookShelf = async (bookToUpdate, shelfToUpdate) => {
		await BooksAPI.update(bookToUpdate, shelfToUpdate).then(async (updatedShelf) => {
			const changeToArray = Object.values(updatedShelf).flat();
			const booksInfoArray = await Promise.all(
				changeToArray.map((bookID) => BooksAPI.get(bookID))
			);
			handleBooks(booksInfoArray);
			setDidMount(true);
		});
	};

	return (
		<div className="app">
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
								<Shelfs booksArray={booksArray} updateShelf={updateBookShelf} />
							)}
						</div>
						<OpenSearch />
					</div>
				)}
			/>
		</div>
	);
}
