import React, { Component } from "react";
import Operan from "./Operan";

export default class StateProps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nama: "Sheila",
		};
	}

	gantiNama = (newNama) => {
		this.setState({
			nama: newNama,
		});
	};

	render() {
		return (
			<div>
				<p>{this.state.nama}</p>
				<button onClick={() => this.gantiNama("Berlian")}>Ubah nama!</button>
				<Operan nama={this.state.nama} gantiNama={this.gantiNama} />
			</div>
		);
	}
}
