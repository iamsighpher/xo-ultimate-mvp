import { useNavigate } from "react-router-dom";

import Footer from "../layout/Footer";
import Header from "../layout/Header";
import MenuButton from "../components/MenuButton";

import leaderboardIcon from "../../images/menuicon_leaderboard.svg";

export default function MenuOnline() {
    let navigate = useNavigate();

    return (
        <div className="menuonline page">
            <Header/>
            <main className="page__main">
                <section className="page__container">
                    <div className="page__item">
                        <p className="title-text">Online Menu</p>
                    </div>
                    <div className="page__item">
                        <MenuButton
                            icon={leaderboardIcon}
							title="Leaderboard"
							type="menu"
							onClick={() => {
								navigate("/leaderboard");
							}}
						/>
                    </div>
                    <div className="page__item">
						<MenuButton
							title="Exit Menu"
							type="icon"
							color="yellow"
							onClick={() => {
								navigate("/menu");
							}}
						/>
					</div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}