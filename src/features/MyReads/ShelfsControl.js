import React, { useState } from "react";
import styles from "./MyReads.module.css";

export default function ShelfsControl(props) {
	const { book, shelf, updateShelf } = props;

	const [options] = useState([
		{
			name: "Move to...",
			value: null,
			disabled: true,
		},
		{
			name: "Currently Reading",
			value: "currentlyReading",
			disabled: false,
		},
		{
			name: "Want to Read",
			value: "wantToRead",
			disabled: false,
		},
		{
			name: "Read",
			value: "read",
			disabled: false,
		},
		{
			name: "None",
			value: "none",
			disabled: false,
		},
	]);

	const handleShelfControl = (event) => {
		const shelf = event.target.value;

		updateShelf(book, shelf);
	};

	return (
		<div className={styles.bookShelfChanger}>
			<select onChange={handleShelfControl} value={shelf}>
				{options.map((option, index) => (
					<option key={index} value={option.value} disabled={option.disabled}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
}
