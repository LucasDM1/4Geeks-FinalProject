import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Image, Button, Card, Form, Modal, Alert } from "react-bootstrap";
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
		if (store.token === null || store.token === undefined) {
			history.push("/");
		}
	};

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

	const [values, setValues] = useState({
		name: profile.name,
		lastname: profile.lastname,
		cedula: profile.cedula,
		phone: profile.phone,
		email: profile.email,
		description: profile.description
	});

	const handleChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	};

	const handleUpdateUserProfile = () => {
		actions.updateUserProfile(
			values.name,
			values.lastname,
			values.cedula,
			values.phone,
			values.description,
			values.email
		);
		history.push("/perfil");
	};
	useEffect(() => {
		actions.closeMenu();
	}, []);
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
								<Form className="mt-3" noValidate validated={validated} onSubmit={handleSubmit}>
									<Form.Row>
										<Form.Group as={Col} md="12" controlId="validationCustom01">
											<Form.Label>
												<b>Nombre</b>
											</Form.Label>
											<Form.Control
												required
												type="text"
												name="name"
												placeholder={profile.name}
												value={values.name}
												onChange={handleChange}
											/>
										</Form.Group>
										<Form.Group as={Col} md="12" controlId="validationCustom02">
											<Form.Label>
												<b>Apellido</b>
											</Form.Label>
											<Form.Control
												required
												type="text"
												name="lastname"
												placeholder={profile.lastname}
												value={values.lastname}
												onChange={handleChange}
											/>
										</Form.Group>
										<Form.Group as={Col} md="12" controlId="validationCustom03">
											<Form.Label>
												<b>Cédula</b>
											</Form.Label>
											<Form.Control
												required
												type="text"
												name="cedula"
												placeholder={profile.cedula}
												value={values.cedula}
												onChange={handleChange}
											/>
										</Form.Group>
										<Form.Group as={Col} md="12" controlId="validationCustom04">
											<Form.Label>
												<b>Email</b>
											</Form.Label>
											<Form.Control
												required
												type="email"
												name="email"
												placeholder={profile.email}
												value={values.email}
												onChange={handleChange}
											/>
										</Form.Group>
										<Form.Group as={Col} md="12" controlId="validationCustom05">
											<Form.Label>
												<b>Tel</b>
											</Form.Label>
											<Form.Control
												required
												type="text"
												name="phone"
												placeholder={profile.phone}
												value={values.phone}
												onChange={handleChange}
											/>
										</Form.Group>
										<Form.Group as={Col} md="12" controlId="validationCustom06">
											<Form.Label>
												<b>Descripción</b>
											</Form.Label>
											<Form.Control
												required
												type="text"
												name="description"
												placeholder={profile.description}
												value={values.description}
												onChange={handleChange}
											/>
										</Form.Group>
									</Form.Row>
								</Form>
							</Card.Body>
							<Card.Footer>
								<Button className="mr-3" variant="danger" onClick={handleShow}>
									Eliminar Cuenta
								</Button>
								<Button type="submit" variant="success" onClick={handleUpdateUserProfile}>
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
