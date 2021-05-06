import React, { useState, useContext } from "react";
import {
	InputGroup,
	Nav,
	Navbar,
	Button,
	Container,
	Row,
	Col,
	Collapse,
	Card,
	ListGroup,
	Form,
	FormControl
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router";

export const NavBar = () => {
	const [open, setOpen] = useState(false);
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const token = sessionStorage.getItem("token");

	return (
		<>
			<Navbar bg="dark" collapseOnSelect expand="lg" variant="dark">
				<Nav className="mr-auto my-1">
					<InputGroup>
						{token !== "null" && token !== "undefined" && token !== undefined && token !== null ? (
							<Button
								variant="dark"
								onClick={() => setOpen(!open)}
								aria-controls="example-collapse-text"
								aria-expanded={open}>
								<i
									className="fas fa-bars text-white"
									style={{ position: "relative", fontSize: "20pt" }}
								/>
							</Button>
						) : null}
						<Link to="/">
							<Navbar.Brand className="ml-3">
								<a href="https://3000-coral-mosquito-wpshiko2.ws-us03.gitpod.io/">
									<b>OurAppName</b>
								</a>
							</Navbar.Brand>
						</Link>
					</InputGroup>
				</Nav>
				<Nav className="mr-auto  my-1">
					<Form className="navbar-form navbar-right" inline>
						<InputGroup>
							<Form>
								<Form.Group controlId="exampleForm.SelectCustom">
									<FormControl
										placeholder="Buscar"
										aria-label="buscar"
										aria-describedby="basic-addon2"
									/>
									<Form.Control className="ml-2" as="select" custom>
										<option>San José</option>
										<option>Alajuela</option>
										<option>Heredia</option>
										<option>Cartago</option>
										<option>Limón</option>
										<option>Puntarenas</option>
										<option>Guanacaste</option>
									</Form.Control>
									<Button className="ml-2" variant="info">
										<i className="fas fa-search" />
									</Button>
								</Form.Group>
							</Form>
						</InputGroup>
					</Form>
				</Nav>
				<Nav className="my-1">
					{token !== "null" && token !== "undefined" && token !== undefined && token !== null ? (
						<Button onClick={() => actions.logOut()} variant="danger">
							Cerrar sesión
						</Button>
					) : (
						<>
							<InputGroup>
								<Link to="/login">
									<Button variant="info">Iniciar sesión</Button>
								</Link>
								<Link to="/registro">
									<Button variant="warning" className="ml-3">
										Registrarse
									</Button>
								</Link>
							</InputGroup>
						</>
					)}
				</Nav>
			</Navbar>
			<Collapse in={open} timeout={5}>
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
								<Link to="/publicar">
									<ListGroup.Item>Crear Publicación</ListGroup.Item>
								</Link>

								<Link to="/perfildeservicio">
									<ListGroup.Item>Perfil de Servicio</ListGroup.Item>
								</Link>

								<Link to="/perfil">
									<ListGroup.Item>Mi información</ListGroup.Item>
								</Link>

								{/* <ListGroup.Item>Mensajes</ListGroup.Item> */}
							</ListGroup>
						</Card.Body>
					</Card>{" "}
				</div>
			</Collapse>
		</>
	);
};
