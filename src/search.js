import { useState } from "react";
import React from "react";

function Search() {
	const [query, setQuery] = useState();
	console.log(query);
	return (
		<>
			<input type="text" onChange={(e) => setQuery(e.target.value)} />
			<button type="button" className="btn btn-danger">
				Search
			</button>
		</>
	);
}

export { Search };
