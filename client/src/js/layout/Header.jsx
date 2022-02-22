import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="header">
			<Link to="/menu">
				<img className="header__logo" src={logo} alt="logo"/>
			</Link>
		</header>
	);
}
