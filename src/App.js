import React from "react";
import { Load } from "./api";
import { Search } from "./search";
import Image from "./image";
import { getSuggestedQuery } from "@testing-library/dom";

function App() {
	// Search Data
	const search = Search();
	// Load Data
	const data = Load();
	console.log(data);
	return (
		<>
			<div className="row">
				<div className="col-8">{search}</div>
				{/* Load Data */}
				<div className="col-12">
					{data.map((image) => (
						<Image src={image.urls.thumb} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;
