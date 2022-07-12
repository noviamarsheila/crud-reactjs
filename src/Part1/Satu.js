import React from "react";

const Satu = () => {
	const mahasiswa = [
		{
			id: 1,
			nama: "Sheila",
			umur: 18,
		},
		{
			id: 2,
			nama: "berlian",
			umur: 17,
		},
		{
			id: 3,
			nama: "Rival",
			umur: 19,
		},
	];

	return (
		<div>
			<ul>Data Mahasiswa</ul>
			{mahasiswa.map((mhs) => {
				return (
					<li>
						Nama : {mhs.nama} berumur {mhs.umur} tahun
					</li>
				);
			})}
		</div>
	);
};

export default Satu;
