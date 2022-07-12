import React, { Component } from "react";
import Sublifecycle from "./Sublifecycle";

export default class Lifecycle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			makanan: "Bakso",
			data: {},
			tampilHalamanSub: false,
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					data: json,
				});
			});
	}

	ubahMakanan(value) {
		this.setState({
			makanan: value,
		});
	}

	render() {
		return (
			<div>
				<p>{this.state.makanan}</p>
				{this.state.tampilHalamanSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />}
				<button onClick={() => this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })}>Klik</button>
			</div>
		);
	}
}
