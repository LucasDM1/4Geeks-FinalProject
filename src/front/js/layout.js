import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";

import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { PerfilUsuario } from "./pages/perfilUsuario";

import { Single } from "./pages/single";
import { Register } from "./pages/register";
import { Service } from "./pages/service";
import injectContext from "./store/appContext";

import { NavBar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Carousel } from "./component/carousel";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavBar />
					<Container fluid>
						<Switch>
							<Route exact path="/">
								<Carousel />
								<Home />
							</Route>
							<Route exact path="/demo">
								<Demo />
							</Route>
							<Route exact path="/register">
								<Register />
							</Route>
							<Route exact path="/perfil">
								<PerfilUsuario />
							</Route>
							<Route exact path="/service/:id">
								<Service />
							</Route>
							<Route exact path="/single/:theid">
								<Single />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
					</Container>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
