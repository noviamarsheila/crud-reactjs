import React from "react";

export default function Map() {
	const makanans = [
		{
			id: 1,
			nama: "Soto",
			harga: 12000,
		},
		{
			id: 2,
			nama: "Bakso",
			harga: 10000,
		},
		{
			id: 3,
			nama: "Mie Ayam",
			harga: 8000,
		},
		{
			id: 4,
			nama: "Nasi Goreng",
			harga: 13000,
		},
		{
			id: 5,
			nama: "Seblak",
			harga: 15000,
		},
	];

	const totalHarga = makanans.reduce((total, makanan) => {
		return total + makanan.harga;
	}, 0);

	return (
		<div>
			<p>Map</p>
			<ul>
				{makanans.map((makanan) => {
					return (
						<li key={makanan.id}>
							{makanan.nama} - {makanan.harga}
						</li>
					);
				})}
			</ul>
			<br />
			<p>Filter harga lebih dari 10rb</p>
			<ul>
				{makanans
					.filter((makanan) => makanan.harga > 10000)
					.map((item, i) => {
						return <li key={i}>{item.nama}</li>;
					})}
			</ul>
			<br />
			<p>Hitung total harga</p>
			<h3>{totalHarga}</h3>
		</div>
	);
}
