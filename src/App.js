import React, { useState } from "react";
import { Load } from "./api";
// import { Search } from "./search";
import Image from "./image";
import { SearchImages } from "./api";
import "./App.css";

function App() {
	// Search Data
	const [query, setQuery] = useState();
	const [searchQuery, setSearch] = useState();
	console.log(query);
	console.log(SearchImages(query));
	const search = () => {
		setSearch(query);
	};

	const searchData = SearchImages(searchQuery);
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
			<div className="contain_data">
				<div>{search}</div>
				{/* Display Search Data when entered Data else Random*/}
				{searchQuery
					? searchData.map((image, key) => (
							<Image src={image.urls.thumb} key={key} />
					  ))
					: data.map((image, key) => (
							<Image src={image.urls.thumb} key={key} />
					  ))}

				{/* Used Ternary Operator */}
			</div>
		</>
	);
}

export default App;
