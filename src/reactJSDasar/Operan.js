import React, { Component } from "react";

export default class Operan extends Component {
	render() {
		return (
			<div>
				<p>Nama : {this.props.nama}</p>
				<button onClick={() => this.props.gantiNama("Novia")}>Klikk</button>
			</div>
		);
	}
}
