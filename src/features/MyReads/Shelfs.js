import React from "react";
import styles from "./MyReads.module.css";
import Book from "./Book";

export default function Shelfs(props) {
	const { booksArray, updateShelf } = props;
	return (
		<div>
			<div className={styles.bookshelf}>
				<h2 className={styles.bookshelfTitle}>Currently Reading</h2>
				<div className={styles.bookshelfBooks}>
					<ol className={styles.booksGrid}>
						{booksArray.map(
							(book) =>
								book.shelf === "currentlyReading" && (
									<li key={book.id}>
										<Book
											backgroundURL={
												book.imageLinks ? book.imageLinks.thumbnail : ""
											}
											bookTitle={book.title}
											bookAuthor={book.authors}
											shelf={book.shelf}
											book={book}
											updateShelf={updateShelf}
										/>
									</li>
								)
						)}
					</ol>
				</div>
			</div>
			<div className={styles.bookshelf}>
				<h2 className={styles.bookshelfTitle}>Want to Read</h2>
				<div className={styles.bookshelfBooks}>
					<ol className={styles.booksGrid}>
						{booksArray.map(
							(book) =>
								book.shelf === "wantToRead" && (
									<li key={book.id}>
										<Book
											backgroundURL={
												book.imageLinks ? book.imageLinks.thumbnail : ""
											}
											bookTitle={book.title}
											bookAuthor={book.authors}
											shelf={book.shelf}
											book={book}
											updateShelf={updateShelf}
										/>
									</li>
								)
						)}
					</ol>
				</div>
			</div>
			<div className={styles.bookshelf}>
				<h2 className={styles.bookshelfTitle}>Read</h2>
				<div className={styles.bookshelfBooks}>
					<ol className={styles.booksGrid}>
						{booksArray.map(
							(book) =>
								book.shelf === "read" && (
									<li key={book.id}>
										<Book
											backgroundURL={
												book.imageLinks ? book.imageLinks.thumbnail : ""
											}
											bookTitle={book.title}
											bookAuthor={book.authors}
											shelf={book.shelf}
											book={book}
											updateShelf={updateShelf}
										/>
									</li>
								)
						)}
					</ol>
				</div>
			</div>
		</div>
	);
}
