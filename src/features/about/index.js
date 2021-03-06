import React from "react";
import styles from "./about.module.css";
import Navigation from "../navigation";
import AboutPortuguese from "./AboutPortuguese";

export default function About({ language, onUpdateLanguage }) {
	if (language === "portuguese") {
		return <AboutPortuguese onUpdateLanguage={onUpdateLanguage} />;
	}

	return (
		<div className={styles.AboutContainer}>
			<Navigation onUpdateLanguage={onUpdateLanguage} language={language} />
			<h1 className={styles.heading}>About me</h1>

			<p className={styles.text}>
				Hello! My name is <span className={styles.span}>Bruno</span>, I'm from Brazil and I
				am a Front end Web Developer.
			</p>
			<p className={styles.text}>
				It took me a long time and some deviations to get here. I am a Law graduate, but by
				the end of the University, I already knew that I was not going to follow that path.
				So, when I finished it I decided to study business and got an MBA in it.
			</p>
			<p className={styles.text}>
				But again, I didn't feel in love. I liked it and I know that I will use a lot of
				things I learned there. But since it is a technology-oriented college, I started to
				see some devs working, and immediately I loved that.
			</p>
			<p className={styles.text}>
				Now, after I got some programming practice, I am 100% confident that I made the
				right choice. I know that I have a long path to go, but I know that I found the
				thing that I want to do every day, and if I train, study and keep up myself updated
				on new technologies, I will achieve my goals.
			</p>
			<p className={styles.text}>
				This portfolio is all about that. I want to put my projects here and to use this as
				a playground to test new technologies and skills I learn. So don't expect this site
				to stay the same for a long time.
			</p>
			<p className="text-center m-0">
				<span className={styles.span}>Welcome!</span>
			</p>
		</div>
	);
}
