import React from "react";
import styles from "./introMyReads.module.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Navigation from "../../navigation";

export default function introMyReadsPortuguese({ onUpdateLanguage }) {
	return (
		<Container className={styles.myReadsContainer}>
			<Navigation onUpdateLanguage={onUpdateLanguage} language={"portuguese"} />
			<Container>
				<h1 className={styles.heading}>MyReads</h1>
				<h2 className={styles.subHeading}>
					Aplicativo de estante virtual que permite selecionar e categorizar seus livros.
				</h2>
				<p className={styles.introText}>
					<span className="text-warning">Obs: o projeto é em inglês!</span>
				</p>
				<div className={styles.btnBox}>
					<Link to="/MyReads" className={styles.btn}>
						<strong>Projeto</strong>
					</Link>

					<Link
						to={{ pathname: "https://github.com/bruno-gurgel/MyReads" }}
						target="_blank"
						className={styles.btn}
					>
						<strong>Repositório</strong>
					</Link>
				</div>
			</Container>
			<Container className="mt-5">
				<p className={styles.introText}>
					Neste projeto, tive que fazer um Single Page Application (SPA) que fosse uma
					estante de livros para que os usuários pudessem organizar o que estavam lendo ou
					querendo ler.
				</p>
				<p className={styles.introText}>
					Usei uma API fornecida pela Udacity de servidor e tive que fazer o layout do
					aplicativo para que ficasse limpo e reutilizável. Eu segui junto com as
					sugestões da
					<Link
						to={{ pathname: "https://reactjs.org/docs/thinking-in-react.html" }}
						target="_blank"
						className={styles.pageLink}
					>
						{" "}
						documentação do React{" "}
					</Link>{" "}
					para fazer o projeto, mas como este foi meu primeiro projeto neste framework,
					algumas coisas eu faria de forma diferente hoje, especialmente a parte de
					simulação/planejamento, que se feita corretamente economiza muito tempo depois.
				</p>
				<p className={styles.introText}>
					Só usei o React neste aplicativo, sempre tentando empregar as melhores práticas,
					como evitar componentes de classe. Desde que aprendi React sem os hooks,
					enfrentei alguns desafios, mas realmente aprendi muito.
				</p>
			</Container>
		</Container>
	);
}
