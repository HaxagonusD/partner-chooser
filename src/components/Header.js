import React from "react";

export default function Header(props) {
	return (
		<div className="flex uppercase font-headings text-primary justify-center text-2xl">
			<h1>{props.name}</h1>
			<hr />
		</div>
	);
}
