import React, { useEffect, useContext } from "react";
import { Container, Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";

export const PerfilUsuario = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.handleGetUserProfile();
	}, []);
	const profile = store.perfilUsuario;
	return (
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
					<Card style={{ width: "54rem", margin: "3rem 0 3rem 0" }}>
						<Card.Body>
							<Image
								src="https://fakeimg.pl/100x100/?text=Profile Pic"
								rounded
								style={{ margin: "0 0 2rem 1rem" }}
							/>
							<Button className="float-right" variant="dark">
								<i className="fas fa-edit"> Editar</i>
							</Button>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<b style={{ marginRight: "5rem" }}>Nombre:</b> {profile.name}
								</ListGroup.Item>
								<ListGroup.Item>
									<b style={{ marginRight: "5rem" }}>Apellido:</b> {profile.lastname}
								</ListGroup.Item>
								<ListGroup.Item>
									<b style={{ marginRight: "5.5rem" }}>Cédula:</b> {profile.cedula}
								</ListGroup.Item>
								<ListGroup.Item>
									<b style={{ marginRight: "6rem" }}>Email:</b> {profile.email}
								</ListGroup.Item>
								<ListGroup.Item>
									<b style={{ marginRight: "7.5rem" }}>Tel:</b> {profile.phone}
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
