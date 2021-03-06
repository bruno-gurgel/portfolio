import React from "react";
import styles from "./introWouldYouRather.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Navigation from "../../navigation";

export default function introWouldYouRatherPortuguese({ onUpdateLanguage }) {
	return (
		<Container className={styles.wouldYouRatherContainer}>
			<Navigation onUpdateLanguage={onUpdateLanguage} language="portuguese" />
			<Container>
				<h1 className={styles.heading}>Would You Rather...</h1>
				<h2 className={styles.subHeading}>
					Variação do jogo{" "}
					<Link
						to={{
							pathname: "https://en.wikipedia.org/wiki/Would_you_rather",
						}}
						target="_blank"
						className={styles.pageLink}
					>
						Would You Rather.
					</Link>
				</h2>
				<p className={styles.introText}>
					<span className="text-warning">Obs: o projeto é em inglês!</span>
				</p>
				<div className={styles.btnBox}>
					<Link to="/WouldYouRather" className={styles.btn}>
						<strong>Projeto</strong>
					</Link>

					<Link
						to={{
							pathname: "https://github.com/bruno-gurgel/would-you-rather",
						}}
						target="_blank"
						className={styles.btn}
					>
						<strong>Repositório</strong>
					</Link>
				</div>
			</Container>
			<Container className="mt-4 text-justify">
				<p className={styles.introText}>
					Neste projeto, eu tive que fazer um aplicativo da web que permite ao usuário
					jogar o “Você prefere?” jogos. O jogo é assim: Um usuário é feito uma pergunta
					na forma: “Você prefere <span className="text-warning">[Opção A]</span> or{" "}
					<span className="text-warning">[Opção B]</span> ?”. Responder "nenhum" ou
					"ambos" é contra as regras.
				</p>
				<p className={styles.introText}>
					Usei um banco de dados falso fornecido pela Udacity para conter os dados
					iniciais para que eu pudesse me concentrar no React & Redux. Nesse projeto me
					senti muito mais confiante no React, então me esforcei mais no controle de
					estado com o Redux, mas o adorei e sua simplicidade. Além disso, sua
					<Link
						to={{ pathname: "https://redux.js.org/introduction/getting-started" }}
						target="_blank"
						className={styles.pageLink}
					>
						{" "}
						excelente documentação{" "}
					</Link>{" "}
					tornou meu aprendizado muito mais fácil.
				</p>
				<p className={styles.introText}>
					Usei React com Redux neste aplicativo. Na parte do Redux, usei o{" "}
					<Link
						to={{ pathname: "https://redux-toolkit.js.org/" }}
						target="_blank"
						className={styles.pageLink}
					>
						{" "}
						Toolkit{" "}
					</Link>{" "}
					que abstrai muitas das partes complicadas, como reducers e atualizações de
					estado, vale realmente a pena tentar!
				</p>
			</Container>
		</Container>
	);
}
