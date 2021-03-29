import React from "react";
import styles from "./MyReads.module.css";
import ShelfsControl from "./ShelfsControl";

export default function Book(props) {
	const { backgroundURL, shelf, book, updateShelf, bookTitle, bookAuthor } = props;
	return (
		<div className={styles.book}>
			<div className={styles.bookTop}>
				<div
					className={styles.bookCover}
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url(${backgroundURL})`,
					}}
				></div>
				<ShelfsControl shelf={shelf} book={book} updateShelf={updateShelf} />
			</div>
			<div className={styles.bookTitle}>{bookTitle}</div>
			<div className={styles.bookAuthors}>{bookAuthor}</div>
		</div>
	);
}
