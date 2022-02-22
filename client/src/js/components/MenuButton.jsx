import React from "react";
import menuDefaultIcon from "../../images/menuicon_default.svg";
import iconDefaultIcon from "../../images/icon_default.svg";

function MenuButton(props) {
	let buttonTitle = props.title || "Default";
	let buttonClick = props.onClick
		? props.onClick
		: (e) => {
				e.preventDefault();
		  };
	let buttonType = props.type || "";
	let buttonIcon = props.icon;
	let buttonDisabled = props.disabled;

	function buttonTypes(currentButtonType) {
		switch (currentButtonType) {
			case "icon":
				return (
					<button
						disabled={buttonDisabled}
						onClick={buttonClick}
						className={
							props.color
								? `icon-btn icon-btn--${props.color}`
								: "icon-btn"
						}
					>
						<span className="icon-btn__inner">
							<img
								className="icon-btn__icon"
								src={buttonIcon || iconDefaultIcon}
								alt={buttonTitle}
							/>
						</span>
					</button>
				);
			case "menu":
				return (
					<button
						disabled={buttonDisabled}
						onClick={buttonClick}
						className="menu-btn"
					>
						<span className="menu-btn__inner">
							{buttonTitle}
							<img
								className="menu-btn__icon"
								src={buttonIcon || menuDefaultIcon}
								alt={buttonTitle}
							/>
						</span>
					</button>
				);
			case "primary":
				return (
					<button
						disabled={buttonDisabled}
						onClick={buttonClick}
						className={
							props.color
								? `primary-btn primary-btn--${props.color}`
								: "primary-btn"
						}
					>
						<span className="primary-btn__inner">
							{buttonTitle}
						</span>
					</button>
				);
			default:
				return <React.Fragment />;
		}
	}

	return buttonTypes(buttonType);
}

export default MenuButton;
