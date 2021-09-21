import React, { useState } from "react";

const Api = () => {
	const [number, setNumber] = useState(24);
	return (
		<>
			<h1>{number}</h1>
			<button onClick={() => setNumber(number + 1)}>Click here</button>
		</>
	);
};

export default Api;
