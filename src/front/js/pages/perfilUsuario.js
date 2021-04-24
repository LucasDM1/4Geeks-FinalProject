import React from "react";
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";

export const PerfilUsuario = () => {
	return (
		<Row>
			<Col md={{ span: 4, offset: 4 }}>
				<Card style={{ width: "54rem" }}>
					<Card.Body>
						<Image
							src="https://fakeimg.pl/100x100/?text=Profile Pic"
							rounded
							style={{ margin: "0 0 0 1rem" }}
						/>
						<ListGroup variant="flush">
							<ListGroup.Item>Nombre:</ListGroup.Item>
							<ListGroup.Item>Apellido:</ListGroup.Item>
							<ListGroup.Item>Cédula:</ListGroup.Item>
							<ListGroup.Item>Email:</ListGroup.Item>
							<ListGroup.Item>Tel:</ListGroup.Item>
						</ListGroup>
					</Card.Body>
				</Card>
			</Col>
			<Col>
				<Button variant="dark" style={{ margin: "0 1rem 0 1rem" }}>
					<i className="fas fa-edit"> Editar</i>
				</Button>
			</Col>
		</Row>
	);
};
