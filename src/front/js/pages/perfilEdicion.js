import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Image, Button, Card, Tooltip, OverlayTrigger, Form, Modal } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const PerfilEdicion = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	useEffect(() => {
		actions.handleGetUserEditProfile();
	}, []);
	const profile = store.perfilUsuario;
	const handleDeleteAccount = () => {
		actions.deleteAccount();
		actions.logOut();
		if (store.token === null) {
			history.push("/");
		}
	};
	const renderTooltip = props => (
		<Tooltip id="button-tooltip" {...props}>
			Cambiar foto de perfil
		</Tooltip>
	);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [validated, setValidated] = useState(false);

	const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};
	return (
		<>
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Eliminación de Cuenta</Modal.Title>
				</Modal.Header>
				<Modal.Body>La cuenta de usuario será eliminada permanentemente. Desea continuar?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancelar
					</Button>
					<Button variant="primary" onClick={handleDeleteAccount}>
						Aceptar
					</Button>
				</Modal.Footer>
			</Modal>
			<Container
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}>
				<Row
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}>
					<Col>
						<Card style={{ width: "54rem", margin: "3rem 0 6rem 0" }}>
							<Card.Body>
								<OverlayTrigger
									placement="right"
									delay={{ show: 250, hide: 400 }}
									overlay={renderTooltip}>
									<Image src="https://fakeimg.pl/100x100/?text=Profile Pic" rounded />
								</OverlayTrigger>

								<Form className="mt-3" noValidate validated={validated} onSubmit={handleSubmit}>
									<Form.Row>
										<Form.Group as={Col} md="12" controlId="validationCustom01">
											<Form.Label>
												<b>Nombre</b>
											</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="Nombre"
												defaultValue={profile.name}
											/>
										</Form.Group>
										<Form.Group as={Col} md="12" controlId="validationCustom02">
											<Form.Label>
												<b>Apellido</b>
											</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="Apellido"
												defaultValue={profile.lastname}
											/>
										</Form.Group>
										<Form.Group as={Col} md="12" controlId="validationCustom03">
											<Form.Label>
												<b>Cédula</b>
											</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="000000000"
												defaultValue={profile.cedula}
											/>
										</Form.Group>
										<Form.Group as={Col} md="12" controlId="validationCustom04">
											<Form.Label>
												<b>Email</b>
											</Form.Label>
											<Form.Control
												required
												type="email"
												placeholder="Email"
												defaultValue={profile.email}
											/>
										</Form.Group>
										<Form.Group as={Col} md="12" controlId="validationCustom05">
											<Form.Label>
												<b>Tel</b>
											</Form.Label>
											<Form.Control
												required
												type="text"
												placeholder="88888888"
												defaultValue={profile.phone}
											/>
										</Form.Group>
									</Form.Row>
								</Form>
							</Card.Body>
							<Card.Footer>
								<Button className="mr-3" variant="danger" onClick={handleShow}>
									Eliminar Cuenta
								</Button>
								<Button type="submit" variant="success">
									Guardar Cambios
								</Button>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
