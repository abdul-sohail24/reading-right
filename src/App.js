import React, { useState } from "react";
import { Load } from "./api";
// import { Search } from "./search";
import Image from "./image";
import { SearchImages } from "./api";
import "./App.css";
import { Search } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
			<h3 className="center_text mt-2">Image Search Engine</h3>
			<div className="input_box">
				<TextField
					label="Search for Photos"
					className="mt-5"
					onChange={(e) => setQuery(e.target.value)}
				/>

				<button
					type="button"
					className="find_button mt-5 ml-3"
					onClick={search}
				>
					<Search />
				</button>
			</div>
			<div className="contain_data">
				<div>{search}</div>
				{/* Display Search Data when entered Data else Random*/}

				{searchQuery
					? searchData.map((image, key) => (
							<Image src={image.urls.small} key={key} />
					  ))
					: data.map((image, key) => (
							<Image src={image.urls.small} key={key} />
					  ))}
				{/* Used Ternary Operator */}
			</div>
		</>
	);
}

export default App;
