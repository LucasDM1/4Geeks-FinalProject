import React, { useState } from "react";
import {
	Row,
	Col,
	ListGroup,
	Image,
	Button,
	Card,
	Tooltip,
	OverlayTrigger,
	InputGroup,
	Form,
	FormControl,
	Modal
} from "react-bootstrap";

export const PerfilEdicion = () => {
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
					<Button variant="primary">Aceptar</Button>
				</Modal.Footer>
			</Modal>

			<Row className="my-5">
				<Col md={{ span: 4, offset: 3 }}>
					<Card style={{ width: "54rem", margin: "3rem 0 3rem 0" }}>
						<Card.Body>
							<OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
								<Image src="https://fakeimg.pl/100x100/?text=Profile Pic" rounded />
							</OverlayTrigger>

							<Form className="mt-3" noValidate validated={validated} onSubmit={handleSubmit}>
								<Form.Row>
									<Form.Group as={Col} md="12" controlId="validationCustom01">
										<Form.Label>Nombre</Form.Label>
										<Form.Control required type="text" placeholder="Nombre" defaultValue="Nombre" />
									</Form.Group>
									<Form.Group as={Col} md="12" controlId="validationCustom02">
										<Form.Label>Apellido</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="Apellido"
											defaultValue="Apellido"
										/>
									</Form.Group>
									<Form.Group as={Col} md="12" controlId="validationCustom03">
										<Form.Label>Cédula</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="000000000"
											defaultValue="000000000"
										/>
									</Form.Group>
									<Form.Group as={Col} md="12" controlId="validationCustom04">
										<Form.Label>Email</Form.Label>
										<Form.Control
											required
											type="email"
											placeholder="Email"
											defaultValue="example@domain.com"
										/>
									</Form.Group>
									<Form.Group as={Col} md="12" controlId="validationCustom05">
										<Form.Label>Tel</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="88888888"
											defaultValue="88888888"
										/>
									</Form.Group>
								</Form.Row>
								<Button className="mr-3" variant="danger" onClick={handleShow}>
									Eliminar Cuenta
								</Button>
								<Button type="submit" variant="success">
									Guardar Cambios
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};
