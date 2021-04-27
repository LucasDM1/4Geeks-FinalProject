import React, { useState } from "react";
import { Navbar, Button, Col, Collapse, Card, ListGroup, Form, FormControl } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const NavBar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Navbar bg="dark" variant="dark" className="fixed-top" style={{ height: "3rem" }}>
				<Col className="fixed-top">
					<Button
						variant="dark"
						onClick={() => setOpen(!open)}
						aria-controls="example-collapse-text"
						aria-expanded={open}>
						<i className="fas fa-bars text-white" style={{ position: "relative", fontSize: "20pt" }} />
					</Button>
					<Link to="/">
						<Navbar.Brand className="ml-3" href="#home">
							<b>OurAppName</b>
						</Navbar.Brand>
					</Link>
				</Col>
				<Form inline style={{ marginLeft: "30rem" }}>
					<FormControl
						type="text"
						placeholder="Buscar"
						className="mr-sm-2 ml-sm-2"
						style={{ width: "30rem" }}
					/>
					<Button variant="outline-info">Buscar</Button>
				</Form>
			</Navbar>
			<Collapse in={open} timeout={25}>
				<div
					style={{
						position: "absolute",
						zIndex: "1",
						width: "12rem",
						marginTop: "54px",
						height: "680px"
					}}>
					<Card bg="dark" style={{ width: "18rem", height: window.outerHeight }}>
						<Card.Body>
							<ListGroup>
								<ListGroup.Item>Crear Publicación</ListGroup.Item>
								<Link to="/perfildeservicio">
									<ListGroup.Item>Perfil de Servicio</ListGroup.Item>
								</Link>
								<ListGroup.Item>Mensajes</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>{" "}
				</div>
			</Collapse>
		</>
	);
};
