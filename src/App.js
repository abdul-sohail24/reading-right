import React, { useState } from "react";
import { Load } from "./api";
// import { Search } from "./search";
import Image from "./image";
import { SearchImages } from "./api";

function App() {
	// Search Data
	const [query, setQuery] = useState();
	const [searchQuery, setSearch] = useState();
	console.log(query);
	console.log(SearchImages(query));
	const search = () => {
		setSearch(query);
	};

	const searchData = SearchImages(query);
	console.log(searchData);
	// Load Data
	const data = Load();
	// console.log(data);
	return (
		<>
			<input type="text" onChange={(e) => setQuery(e.target.value)} />
			<button type="button" onClick={search} className="btn btn-danger">
				Search
			</button>
			<div className="row">
				<div className="col-8">{search}</div>
				{/* Load Data */}
				{/* <div className="col-12">
					{data.map((image, key) => (
						<Image src={image.urls.thumb} key={key} />
					))}
				</div> */}
				{/* Display Data */}
				<div className="col-12">
					{searchData.map((image, key) => (
						<Image src={image.urls.thumb} key={key} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;
