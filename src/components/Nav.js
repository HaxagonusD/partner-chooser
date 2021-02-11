import React from "react";

const Nav = () => {
	return (
		<div className="flex items-center">
			<nav className="font-headings flex text-secondary text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-primary shadow sm:items-baseline w-full justify-center items-center">
				<a>
					<img src="https://i.imgur.com/jM71Ikz.png" height="50px" width="50px" alt="" />
				</a>
				<div className="flex items-center mb-2 sm:mb-0">
					<a className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">TKH Team Generator</a>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
