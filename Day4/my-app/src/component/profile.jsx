export default function Profile(props) {
	return (
		<div>
			<h1 style={{ ...props }}>Profile 1</h1>
		</div>
	);
}

export function Profile2() {
	return (
		<div>
			<h1>Profile 2</h1>
			<Data />
		</div>
	);
}

function Data() {
	let arr = ["satu", "dua"];
	return (
		<div>
			{arr.map((val) => (
				<div>{val}</div>
			))}
		</div>
	);
}
