import { useContext } from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

import btnCross from "../../images/btn_cross.svg";
import btnNaught from "../../images/btn_naught.svg";
import GameButton from "../components/GameButton";

import AppContext from "../AppContext";

export default function Game() {
	const appContext = useContext(AppContext);
	return (
		<div className="game page">
			<Header />
			<main className="page__main">
				<section className="page__container">
					<div className="grid">
						{
							appContext.localGame.map((element) => {
								return <GameButton key={element.tile} type={element.type} value={element.value} />
							})
						}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
