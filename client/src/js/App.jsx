import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Local from "./pages/Local";
import Menu from "./pages/Menu";
import MenuOnline from "./pages/MenuOnline";
import MenuLocal from "./pages/MenuLocal";
import Leaderboard from "./pages/Leaderboard";
import Game from "./pages/Game";
import MiniGame from "./pages/MiniGame";

import AppContext from "./AppContext";

const serverUrl = `${process.env.SERVER_URL}`;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			onlineSerciesAvailable: false,
			leaderboardFilter: "",
			leaderboard: [],
			localGame: {
				tiles: [
					{
						type: "game",
						tile: "top_left",
						value: "cross",
					},
					{
						type: "game",
						tile: "top_middle",
						value: null,
					},
					{
						type: "game",
						tile: "top_right",
						value: null,
					},
					{
						type: "game",
						tile: "middle_left",
						value: null,
					},
					{
						type: "game",
						tile: "middle_middle",
						value: "tie",
					},
					{
						type: "game",
						tile: "middle_right",
						value: null,
					},
					{
						type: "game",
						tile: "bottom_left",
						value: null,
					},
					{
						type: "game",
						tile: "bottom_middle",
						value: null,
					},
					{
						type: "game",
						tile: "bottom_right",
						value: "naught",
					},
				],
			},
		};
	}

	handleLeaderboardFilterChange = (event) => {
		let newValue = event.target.value;

		this.setState({
			leaderboardFilter: newValue
		})
	}

	leaderboardFilter = (stateLeaderboard,stateLeaderboardFilter) => {
		return stateLeaderboard.filter((element) => {
			let field = element?.name;
			return field.includes(stateLeaderboardFilter);
		})
	}

	componentDidMount() {
		this.checkOnlineSercies();
	}

	async checkOnlineSercies() {
		try {
			let serverStatus = await fetch(`${serverUrl}/status`);
			let serverisOnline = serverStatus.status === 200;
			this.setState(
				{
					onlineSerciesAvailable: serverisOnline,
				},
				this.getOnlineData
			);
		} catch (error) {
			console.error("Unable to connect to online services");
		}
	}

	async getOnlineData() {
		if (!this.state.onlineSerciesAvailable) {
			return;
		}
		console.log("online services enabled... fetching data");
		try {
			let leaderboard = await fetch(`${serverUrl}/leaderboard`);
			let leaderboardData = await leaderboard.json();
			let highscores = leaderboardData.highscores;
			highscores.sort((a, b) => b.wins - a.wins);
			highscores = highscores.map((element,index) => {
				return {
					...element,
					position: index +1
				}
			});

			this.setState({
				leaderboard: highscores,
			});
		} catch (error) {
			console.log("problem fetching data");
		}
	}

	render() {
		return (
			<AppContext.Provider
				value={{
					onlineSerciesAvailable: this.state.onlineSerciesAvailable,
					leaderboardFilter: this.state.leaderboardFilter,
					leaderboard: this.leaderboardFilter(this.state.leaderboard,this.state.leaderboardFilter),
					handleLeaderboardFilterChange: this.handleLeaderboardFilterChange
				}}
			>
				<Router>
					<Routes>
						<Route path="/menu" element={<Menu />} />
						<Route path="/menulocal" element={<MenuLocal />} />
						<Route path="/menuonline" element={<MenuOnline />} />
						<Route path="/leaderboard" element={<Leaderboard />} />
						<Route path="/local" element={<Local />} />
						<Route path="/game" element={<Game />} />
						<Route path="/minigame" element={<MiniGame />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</Router>
			</AppContext.Provider>
		);
	}
}

export default App;
