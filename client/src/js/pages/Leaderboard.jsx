import { useContext } from "react";

import Footer from "../layout/Footer";
import Header from "../layout/Header";

import AppContext from "../AppContext";

export default function Leaderboard() {
	const appContext = useContext(AppContext);
	return (
		<div className="leaderboard page">
			<Header />
			<main className="page__main">
				<section className="page__container">
					<div className="page__item">
						<p className="title-text">Leaderboard</p>
					</div>
					<div className="page__item">
						<input
							className="form__input"
							type="text"
							placeholder="Search..."
							value={appContext.leaderboardFilter}
							onChange={appContext.handleLeaderboardFilterChange}
						/>
					</div>
					<div className="page__item">
						<div className="leaderboard">
							<div className="leaderboard__item leaderboard__item--head">
								<div className="leaderboard__column-left">
									<p className="leaderboard__position">
										Position
									</p>
									<p className="leaderboard__name">Name</p>
								</div>
								<div className="leaderboard__column-right">
									<p className="leaderboard__wins">
										Lifetime Wins
									</p>
								</div>
							</div>
							{appContext.leaderboard.map((element) => {
								return (
									<div key={element?.id} className="leaderboard__item leaderboard__item">
										<div className="leaderboard__column-left">
											<p className="leaderboard__position">
												{element?.position}
											</p>
											<p className="leaderboard__name">
												{element?.name}
											</p>
										</div>
										<div className="leaderboard__column-right">
											<p className="leaderboard__wins">
												{element?.wins}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
