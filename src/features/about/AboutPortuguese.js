import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./about.module.css";
import Navigation from "../navigation";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function AboutPortuguese({ onUpdateLanguage }) {
	return (
		<Container className={styles.AboutContainer}>
			<Navigation
				onUpdateLanguage={onUpdateLanguage}
				language={"portuguese"}
				backLocation="/"
			/>
			<h1 className="display-2 text-center">Sobre mim</h1>

			<p className={styles.text}>
				Olá! Meu nome é <span className={styles.span}>Bruno</span>, e eu sou um
				desenvolvedor Front-end.
			</p>
			<p className={styles.text}>
				Levei muito tempo e alguns desvios para chegar aqui. Sou formado em Direito, mas com
				o fim da Universidade já sabia que não iria seguir esse caminho. Então, quando
				terminei, decidi estudar administração e fiz um MBA na área.
			</p>
			<p className={styles.text}>
				Mas, novamente, eu não me sentia apaixonado. Gostei e sei que vou aproveitar muito o
				que aprendi lá. Mas por ser uma faculdade voltada para a tecnologia, comecei a ver
				alguns desenvolvedores trabalhando e imediatamente me apaixonei pela área.
			</p>
			<p className={styles.text}>
				Agora, depois de adquirir prática com programação, estou 100% confiante de que fiz a
				escolha certa. Sei que tenho um longo caminho a percorrer, mas sei que encontrei o
				que quero fazer todos os dias, e se treinar, estudar e me manter atualizado em novas
				tecnologias, alcançarei meus objetivos.
			</p>
			<p className={styles.text}>
				Este portfólio tem tudo a ver com isso. Quero colocar meus projetos aqui e usar isso
				como um playground para testar novas tecnologias e habilidades que aprender pelo
				caminho. Portanto, não espere que este site permaneça o mesmo por muito tempo.
			</p>
			<p className="text-center">
				<span className={styles.span}>Seja bem vindo(a)!</span>
			</p>
		</Container>
	);
}
