import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div>
				<Link to="/">Redux Auth</Link>
				<Link to="/signup">sign up</Link>
				<Link to="/signin">sign in</Link>
				<Link to="/signout">sign out</Link>
				<Link to="/feature">Feature</Link>
			</div>
		);
	}
}
export default Header;
