import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#home">CRUD-ReactJS</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto"></Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
