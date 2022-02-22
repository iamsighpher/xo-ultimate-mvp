import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MenuButton from "../components/MenuButton";

import onlineIcon from "../../images/menuicon_online.svg";
import localIcon from "../../images/menuicon_local.svg";
import exitIcon from "../../images/icon_exit.svg";

import AppContext from "../AppContext";

export default function Menu() {
	const appContext = useContext(AppContext);
	let navigate = useNavigate();

	return (
		<div className="menu page">
			<Header />
			<main className="page__main">
				<section className="page__container">
					<div className="page__item">
						<p className="title-text">Main Menu</p>
					</div>
					<div className="page__item">
						<MenuButton
							disabled={!appContext.onlineSerciesAvailable}
							icon={onlineIcon}
							title="Online Game"
							type="menu"
							onClick={() => {
								navigate("/menuonline");
							}}
						/>
					</div>
					<div className="page__item">
						<MenuButton
							disabled
							icon={localIcon}
							title="Local Game"
							type="menu"
							onClick={() => {
								navigate("/menulocal");
							}}
						/>
					</div>
					<div className="page__item">
						<MenuButton
							title="Exit Menu"
							type="icon"
							color="pink "
							icon={exitIcon}
							onClick={() => {
								navigate("/");
							}}
						/>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
