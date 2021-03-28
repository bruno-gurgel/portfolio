import React from "react";
import styles from "./WouldYouRather.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Navigation from "../../navigation";

export default function WouldYouRatherPortuguese({ onUpdateLanguage }) {
	return (
		<Container className={styles.wouldYouRatherContainer}>
			<Navigation
				onUpdateLanguage={onUpdateLanguage}
				language="portuguese"
				backLocation="/projects"
			/>
			<Container>
				<h1 className="display-3 text-white mt-4">Would You Rather...</h1>
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
				<Link
					to={{
						pathname: "https://github.com/bruno-gurgel/would-you-rather",
					}}
					target="_blank"
				>
					<Button variant="warning" size="lg">
						<strong>Repositório</strong>
					</Button>
				</Link>
			</Container>
			<Container className="mt-5 text-justify">
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
				<p className={styles.introText}>
					<span className="text-warning text-center">Obs: o projeto é em inglês!</span>
				</p>
				<div className={styles.buttonBox}>
					<Button variant="warning" size="lg" className={styles.button}>
						<Link to="/" className={styles.buttonLink}>
							<strong>Clique aqui para ver o projeto.</strong>
						</Link>
					</Button>
				</div>
			</Container>
		</Container>
	);
}
