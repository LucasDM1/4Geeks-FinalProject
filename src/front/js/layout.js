import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";

import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import { Recovery } from "./pages/change_pass";
import { PerfilUsuario } from "./pages/perfilUsuario";
import { PerfilEdicion } from "./pages/perfilEdicion";
import { ServiceProfile } from "./pages/serviceprofile";
import { Single } from "./pages/single";
import { Register } from "./pages/register";
import { Service } from "./pages/service";
import { Publish } from "./pages/publicacion";
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
					{/* <Container fluid> */}
					<Switch>
						<Route exact path="/">
							{/* <Carousel /> */}
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/registro">
							<Register />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
            <Route exact path="/recovery">
								<Recovery />
							</Route>
						<Route exact path="/perfil">
							<PerfilUsuario />
						</Route>
						<Route exact path="/publicar">
							<Publish />
						</Route>
						<Route exact path="/perfiledicion">
							<PerfilEdicion />
						</Route>
						<Route exact path="/perfildeservicio">
							<ServiceProfile />
						</Route>
						<Route exact path="/servicio/:index">
							<Service />
						</Route>


						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					{/* </Container> */}
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
