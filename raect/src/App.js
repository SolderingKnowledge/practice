import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
	const [sources, setSource] = useState("");
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${sources}`)
			.then((res) => res.json())
			.then((json) => {
				// setSource(json); it's going to go infinite calls
				console.log(json);
				setData(json);
			});
		//whenever `sources` changes then useEffect gets called
	}, [sources]);

	return (
		<div className="App">
			{data ? (
				data.map((src, idx) => {
					return <div key={idx}>{src.title}</div>;
				})
			) : (
				<h1>No data yet..</h1>
			)}
			<div>
				<button onClick={() => setSource("posts")}>Posts</button>
				<button onClick={() => setSource("todos")}>Todos</button>
				<button onClick={() => setSource("comments")}>Comments</button>
				<button onClick={() => setSource("users")}>Users</button>
			</div>
		</div>
	);
}

export default App;
