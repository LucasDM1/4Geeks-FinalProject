import React, { useState, useContext } from "react";
import AppIcon from "../../img/Emprendelo.png";
import {
	InputGroup,
	Nav,
	Navbar,
	Button,
	// Container,
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
	//const [open, setOpen] = useState(false);
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const token = sessionStorage.getItem("token");
	const [provincia, setProvincia] = useState("Provincia");

	const handleProvincia = () => {
		if (provincia != "Provincia") {
			actions.getPostProv(provincia);
			history.push("/serviciosP/" + provincia);
		}
	};
	return (
		<>
			<Navbar collapseOnSelect expand="lg">
				<Nav className="mr-auto my-1">
					<InputGroup>
						{token !== "null" && token !== "undefined" && token !== undefined && token !== null ? (
							<Button
								id="hamburguer"
								onClick={() => actions.toggleMenu(!store.menuState)}
								aria-controls="example-collapse-text"
								aria-expanded={store.menuState}>
								<i
									className="fas fa-bars text-white"
									style={{ position: "relative", fontSize: "20pt" }}
								/>
							</Button>
						) : null}
						<Link to="/">
							<Navbar.Brand className="ml-3">
								<a href="https://3000-coral-mosquito-wpshiko2.ws-us03.gitpod.io/">
									<img src={AppIcon} style={{ width: "150px" }} />
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
									{/* <FormControl
										placeholder="Buscar"
										aria-label="buscar"
										aria-describedby="basic-addon2"
									/> */}
									<Form.Control
										className="ml-2"
										as="select"
										onChange={e => setProvincia(e.target.value)}
										value={provincia}
										custom>
										<option>Provincia</option>
										<option>San José</option>
										<option>Alajuela</option>
										<option>Heredia</option>
										<option>Cartago</option>
										<option>Limón</option>
										<option>Puntarenas</option>
										<option>Guanacaste</option>
									</Form.Control>
									{/* <Link to={provincia == "Provincia" ? null : "/servicios/" + provincia}></Link> */}
									{/* Hay que reparar esto */}
									<Button className="ml-2" onClick={() => handleProvincia()} variant="info">
										<i className="fas fa-search" />
									</Button>
								</Form.Group>
							</Form>
						</InputGroup>
					</Form>
				</Nav>
				<Nav className="my-1">
					{token !== "null" && token !== "undefined" && token !== undefined && token !== null ? (
						<Button
							onClick={() => {
								actions.logOut();
								actions.closeMenu();
								history.push("/");
							}}
							id="LogOut">
							Cerrar sesión
						</Button>
					) : (
						<>
							<InputGroup>
								<Link to="/login">
									<Button id="LogIn">Iniciar sesión</Button>
								</Link>
								<div id="separacion" />
								<Link to="/registro">
									<Button id="Register">Registrarse</Button>
								</Link>
							</InputGroup>
						</>
					)}
				</Nav>
			</Navbar>
			<Collapse id="collapse" in={store.menuState} timeout={5}>
				<div
					style={{
						position: "absolute",
						zIndex: "1",
						width: "12rem",
						marginTop: "68px",
						height: "680px"
					}}>
					<Card id="collapsecard" style={{ width: "18rem", height: window.outerHeight }}>
						<Card.Body>
							<ListGroup>
								<Link to="/publicar">
									<ListGroup.Item onClick={() => actions.closeMenu()}>
										Crear Publicación
									</ListGroup.Item>
								</Link>

								<Link to="/perfildeservicio">
									<ListGroup.Item onClick={() => actions.closeMenu()}>
										Perfil de Servicio
									</ListGroup.Item>
								</Link>

								<Link to="/perfil">
									<ListGroup.Item onClick={() => actions.closeMenu()}>Mi información</ListGroup.Item>
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
