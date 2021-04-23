import React, { useState } from "react";
import {
	Nav,
	NavDropdown,
	Navbar,
	Button,
	Dropdown,
	Container,
	Row,
	Col,
	Collapse,
	Card,
	ListGroup,
	Form,
	FormControl,
	DropdownButton
} from "react-bootstrap";

export const NavBar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Navbar collapseOnSelect expand="fluid" bg="dark" variant="dark">
				<Col className="fixed-top">
					<Button
						variant="dark"
						onClick={() => setOpen(!open)}
						aria-controls="example-collapse-text"
						aria-expanded={open}>
						<i className="fas fa-bars text-white" style={{ fontSize: "20pt" }} />
					</Button>
					<Navbar.Brand className="ml-3" href="#home">
						<b>OurAppName</b>
					</Navbar.Brand>
				</Col>
				<Form inline style={{ marginLeft: "30rem" }}>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ width: "30rem" }} />
					<Button variant="outline-info">Search</Button>
				</Form>
			</Navbar>
			<Collapse in={open} timeout={25}>
				<div style={{ width: "12rem" }}>
					<ListGroup variant="dark">
						<ListGroup.Item action variant="dark">
							Crear Publicación
						</ListGroup.Item>
						<ListGroup.Item action variant="dark">
							Perfil de Servicio
						</ListGroup.Item>
						<ListGroup.Item action variant="dark">
							Mensajes
						</ListGroup.Item>
					</ListGroup>
				</div>
			</Collapse>
		</>
	);
};
