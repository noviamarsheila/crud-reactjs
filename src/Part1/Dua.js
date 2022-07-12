import React, { Component } from "react";

export default class Dua extends Component {
	constructor(props) {
		super(props);

		this.state = {
			warna: "merah",
		};
	}

	handleKlik = () => {
		this.setState({
			warna: "Biru",
		});
	};

	render() {
		return (
			<div>
				<p>Balon warna {this.state.warna}</p>
				<button onClick={() => this.handleKlik()}>Klik</button>
			</div>
		);
	}
}
