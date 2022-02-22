import background_cross from "../../images/bg_cross.svg";
import background_naught from "../../images/bg_naught.svg";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

export default function Home() {
	return (
		<div className="home page">
			<Header />
			<img className="home__bg-cross" src={background_cross} alt="background image"/>
			<img className="home__bg-naught" src={background_naught} alt="background image"/>
			<Link
				to="/menu"
				className="home__btn primary-btn primary-btn--green"
			>
				<span className="primary-btn__inner">Play</span>
			</Link>
		</div>
	);
}
