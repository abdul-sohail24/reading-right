import { useState, useEffect } from "react";
import axios from "axios";

function Load() {
	const [state, setState] = useState([]);
	useEffect(() => {
		axios
			.get(
				"http://api.unsplash.com/photos?client_id=9qzpPMCI079pQAI2o4KLwKdOD3TO7BLzgdeTG2Ljdb8"
			)
			.then((data) => {
				setState(data.data);
			});
	}, []);

	return state;
}

function SearchImages(query) {
	const [state, setState] = useState([]);
	useEffect(() => {
		axios
			.get(
				"http://api.unsplash.com/search/photos?query=" +
					query +
					"&client_id=9qzpPMCI079pQAI2o4KLwKdOD3TO7BLzgdeTG2Ljdb8"
			)
			.then((data) => {
				setState(data.data.results);
			});
	}, [query]);

	return state;
}

export { Load, SearchImages };
