import { useState, useEffect } from "react";
import axios from "axios";

function Load() {
	const [state, setState] = useState([]);
	axios
		.get(
			"http://api.unsplash.com/photos?client_id=9qzpPMCI079pQAI2o4KLwKdOD3TO7BLzgdeTG2Ljdb8"
		)
		.then((data) => {
			setState(data.data.urls.thumb);
		});
	return state;
}

export { Load };
