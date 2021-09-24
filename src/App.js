import React from "react";
import { Load } from "./api";
import Image from "./image";

function App() {
	const data = Load();
	console.log(data);
	return (
		<>
			{data.map((image) => (
				<Image src={image.urls.thumb} />
			))}
		</>
	);
}

export default App;
