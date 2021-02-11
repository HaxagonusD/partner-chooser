import React from "react";

const Instructions = () => {
	return (
		<div className="my-3">
			<p>
				<strong>Instructions</strong>
			</p>
			<ol className="list-decimal my-2">
				<li>Enter person and their opposition, seperate by comma.</li>
				<li>Click 'Add Person' each time a pair is entered.</li>
				<li>Below, enter the time size in the input.</li>
				<li>Click 'Generate team', and see results below.</li>
			</ol>
			<hr />
		</div>
	);
};

export default Instructions;
