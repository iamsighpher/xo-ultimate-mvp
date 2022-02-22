import gameDefaultIcon from "../../images/game_default.svg";
import gameCrossIcon from "../../images/game_cross.svg";
import gameNaughtIcon from "../../images/game_naught.svg";
import gameTieIcon from "../../images/game_tie.svg";
import gameKingCrossIcon from "../../images/game_kcross.svg";
import gameKingNaughtIcon from "../../images/game_knaught.svg";

export default function GameButton(props) {
	let buttonValue = props.value;
	let buttonType = props.type;
	let buttonColorClasses = determineButtonColorClasses(buttonValue);
	let buttonIcon = determineButtonIcon(buttonValue,buttonType);

	function determineButtonColorClasses(value) {
		switch (value) {
			case "naught":
				return "icon-btn icon-btn--blue";
			case "cross":
				return "icon-btn icon-btn--pink";
			case "tie":
				return "icon-btn icon-btn--purple";
			default:
				return "icon-btn icon-btn--grey";
		}
	}

	function determineButtonIcon(value,type) {
		let iconDictionary = {
			"game": {
				"naught" : gameKingNaughtIcon,
				"cross" : gameKingCrossIcon,
				"tie": gameTieIcon,
			},
			"minigame": {
				"naught" : gameNaughtIcon,
				"cross" : gameCrossIcon,
			}
		}
		
		return iconDictionary[type][value] || gameDefaultIcon;
	}

	return (
		<button className={buttonColorClasses}>
			<span className="icon-btn__inner">
				<img className="icon-btn__icon" src={buttonIcon}></img>
			</span>
		</button>
	);
}
