import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container, Col } from "react-bootstrap";

export const Footer = () => (
	<Navbar bg="dark" variant="dark" fixed="bottom" style={{ height: "3rem" }}>
		<Container fluid>
			<Col className="text-center">
				<Navbar.Text href="#home">OurAppName</Navbar.Text>
			</Col>
			<Col className="text-center">
				<Navbar.Text style={{ fontSize: "12pt" }}>
					<i className="far fa-copyright" />
					Copyright OurCompany 2021
				</Navbar.Text>
			</Col>
			<Col className="text-center">
				<Navbar.Text className="p-3" style={{ fontSize: "16pt" }}>
					<i className="fab fa-instagram mr-2" />
					<i className="fab fa-twitter-square mr-2" />
					<i className="fab fa-facebook-square mr-2" />
					<i className="fab fa-linkedin" />
				</Navbar.Text>
			</Col>
		</Container>
	</Navbar>
);
