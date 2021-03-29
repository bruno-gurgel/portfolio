import React, { useEffect, useState } from "react";
import styles from "./MyReads.module.css";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

export default function Search(props) {
	const { booksArray, updateShelf } = props;

	const [query, updateQuery] = useState("");
	const [booksResultsArray, updateBooksResultsArray] = useState([]);
	const [areThereResults, updateAreThereResults] = useState(true);

	// Updates the search results while the user is typing
	// The useEffect() will monitor the query state for changes and run whenever that happens.
	useEffect(() => {
		if (!query) {
			updateBooksResultsArray([]);
			updateAreThereResults(false);
		} else {
			BooksAPI.search(query).then((searchResults) => {
				if (searchResults?.length > 0) {
					updateBooksResultsArray(searchResults);
					updateAreThereResults(true);
				} else {
					updateBooksResultsArray([]);
					updateAreThereResults(false);
				}
			});
		}
	}, [query]);

	const checkShelf = (book) => {
		return booksArray?.find((item) => item.id === book.id)?.shelf ?? "none";
	};

	return (
		<div className={styles.searchBooks}>
			<div className={styles.searchBooksBar}>
				<Link to="/" className={styles.closeSearch}>
					Close
				</Link>
				<div className={styles.searchBooksInputWrapper}>
					<input
						type="text"
						placeholder="Search by title or author"
						value={query}
						onChange={(event) => updateQuery(event.target.value)}
					/>
				</div>
			</div>
			<div className={styles.searchBooksResults}>
				<ol className={styles.booksGrid}>
					{query &&
						booksResultsArray?.map((book) => {
							const bookShelf = checkShelf(book);
							return (
								<li key={book.id}>
									<Book
										backgroundURL={
											book.imageLinks ? book.imageLinks.thumbnail : ""
										}
										bookTitle={book.title}
										bookAuthor={book.authors || ""}
										shelf={bookShelf}
										book={book}
										updateShelf={updateShelf}
									/>
								</li>
							);
						})}
				</ol>
				{!areThereResults && query && (
					<h1 className={styles.searchBookError}>Search did not return any books.</h1>
				)}
			</div>
		</div>
	);
}
