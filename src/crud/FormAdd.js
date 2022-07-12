import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const FormAdd = ({ nama, deskripsi, harga, handleChange, handleSubmit, id }) => {
	return (
		<div className="mt-5">
			<Row>
				<Col>
					<h1>{!id ? "Tambah Data" : "Edit data"}</h1>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="nama">
							<Form.Label>Nama Makanan</Form.Label>
							<Form.Control
								type="text"
								name="nama"
								autoComplete="off"
								value={nama}
								onChange={(event) => {
									handleChange(event);
								}}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="deskripsi">
							<Form.Label>Deskripsi</Form.Label>
							<Form.Control
								as="textarea"
								rows="5"
								name="deskripsi"
								autoComplete="off"
								value={deskripsi}
								onChange={(event) => {
									handleChange(event);
								}}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasihargacEmail">
							<Form.Label>Harga : </Form.Label>
							<Form.Control
								type="number"
								name="harga"
								autoComplete="off"
								value={harga}
								onChange={(event) => {
									handleChange(event);
								}}
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default FormAdd;
