// import logo from "./logo.svg";
// import logo from "./pngegg.png";
import "./App.css";
import Profile from "./component/profile";
import { Profile2 } from "./component/profile";

function App() {
	function muncul() {
		alert("mantap");
	}
	const judul = "React Js";
	const tombol = <button onClick={muncul}>Oke deh</button>;
	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<h1>React js</h1>
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
		// 		</a>
		// 	</header>
		// </div>
		<div>
			<h1 className="judul">{judul}</h1>
			{tombol}
			<Profile color="blue" />
			<Profile2 />
		</div>
	);
}

export default App;
