import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import { useHistory } from "react-router";
import carpinteriaIcon from "../../img/carpinteria.png";
import albañilIcon from "../../img/Albañil.png";
import cateringIcon from "../../img/catering.png";
import electricistaIcon from "../../img/electricista2.png";
import fontaneriaIcon from "../../img/Fontaneria.png";
import llaveIcon from "../../img/llave.png";
import maskweldIcon from "../../img/maskweld.png";
import mecanicaIcon from "../../img/Mecanica.png";
import pintorIcon from "../../img/Pintores2.png";
import reparacionIcon from "../../img/Reparaciones.png";
import serigrafiaIcon from "../../img/serigrafia.png";
import transporteIcon from "../../img/transporte.png";
import tutoriaIcon from "../../img/tutorias.png";
import nailsIcon from "../../img/uñas.png";
import zapateroIcon from "../../img/zapatero.png";
import lavanderiaIcon from "../../img/lavanderia.png";
import costuraIcon from "../../img/costura.png";
import sastreIcon from "../../img/sastre.png";
import cocinaIcon from "../../img/cocina.png";
import niñeroIcon from "../../img/niñe.png";
import oldIcon from "../../img/old.png";
import animadorIcon from "../../img/animador.png";
import panIcon from "../../img/pan.png";
import peluqueriaIcon from "../../img/peluqueria.png";
import locutorIcon from "../../img/locutor.png";
import pastelIcon from "../../img/pastel.png";
import diseñoIcon from "../../img/diseño.png";
import otrosIcon from "../../img/otros.png";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	//const sessServ = sessionStorage.getItem("servicio");
	// const sessObj = JSON.parse(sessionStorage.getItem("servicio"));
	// let servicios = sessObj["servicios"];

	//console.log(typeof sessServ, sessServ);
	//console.log(typeof sessObj, sessObj["servicios"]);

	const handleCategoria = categoria => {
		actions.getPostCat(categoria);
		history.push("/serviciosC/" + categoria);
	};

	return (
		<div className="container-fluid h-100 p-0" style={{ marginBottom: "5rem", margin: "50px, 0" }}>
			<div id="pageheader">
				<div id="slogan" className="mb-5 text-center">
					<h1>Inserte slogan casual que convenza a cualquiera</h1>
				</div>
				<div id="backcarousel" className="mt-5 mb-5">
					<div className="row justify-content-center">
						<div className="col-10">
							<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
								<ol className="carousel-indicators">
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="0"
										className="active"
										style={{
											borderRadius: "50%",
											width: "20px",
											height: "20px",
											backgroundColor: "#fff",
											opacity: "0.4"
										}}
									/>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="1"
										style={{
											borderRadius: "50%",
											width: "20px",
											height: "20px",
											backgroundColor: "#fff",
											opacity: "0.4"
										}}
									/>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="2"
										style={{
											borderRadius: "50%",
											width: "20px",
											height: "20px",
											backgroundColor: "#fff",
											opacity: "0.4"
										}}
									/>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="3"
										style={{
											borderRadius: "50%",
											width: "20px",
											height: "20px",
											backgroundColor: "#fff",
											opacity: "0.4"
										}}
									/>
									<li
										data-target="#carouselExampleIndicators"
										data-slide-to="4"
										style={{
											borderRadius: "50%",
											width: "20px",
											height: "20px",
											backgroundColor: "#fff",
											opacity: "0.4"
										}}
									/>
								</ol>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<div className="container" alt="First slide">
											<div className="row p-1">
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Carpintería");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
																height: "88px",
																paddingTop: "15px"
															}}
														/>

														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Carpintería</b>
															</h5>
														</div>
													</div>
												</div>

												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Cerrajería");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={llaveIcon}
															style={{
																width: "38px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Cerrajería</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Mecánica");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={mecanicaIcon}
															style={{
																width: "60px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Mecánica</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Albañilería");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={albañilIcon}
															style={{
																width: "70px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Albañilería</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Fontanería");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={fontaneriaIcon}
															style={{
																width: "75px",
																height: "93px",
																paddingTop: "15px"
															}}
														/>
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Fontanería</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Soldadura");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={maskweldIcon}
															style={{
																width: "60px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Soldadura</b>
															</h5>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="carousel-item">
										<div className="container" alt="Second slide">
											<div className="row p-1">
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Pintores");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={pintorIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Pintores</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Sastrería");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={sastreIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Sastrería</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Cocineros");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={cocinaIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Cocineros</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Lavandería");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={lavanderiaIcon}
															style={{
																width: "55px",
																height: "83px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Lavandería</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Locución");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={locutorIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Locución</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Animador de eventos");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={animadorIcon}
															style={{
																width: "28px",
																height: "88px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Animador de eventos</b>
															</h5>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="carousel-item">
										<div className="container">
											<div className="row p-1">
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Panadería");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={panIcon}
															style={{
																width: "85px",
																height: "60px",
																paddingTop: "40px",
																paddingBotton: "30px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5
																className="text-center text-white categorytitle"
																style={{
																	paddingTop: "25px"
																}}>
																<b>Panadería</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Costurería");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={costuraIcon}
															style={{
																width: "75px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Costurería</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Peluquería");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={peluqueriaIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Peluquería</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Zapatero");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={zapateroIcon}
															style={{
																width: "60px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Zapatero</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Niñeros");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={niñeroIcon}
															style={{
																width: "80px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Niñeros</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Cuidadores de adultos");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={oldIcon}
															style={{
																width: "65px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Cuidadores</b>
															</h5>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="carousel-item">
										<div className="container">
											<div className="row p-1">
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Serigrafía");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={serigrafiaIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Serigrafía</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Catering");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={cateringIcon}
															style={{
																marginTop: "15px",
																width: "85px",
																height: "70px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Catering</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Pastelería");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={pastelIcon}
															style={{
																width: "65px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Pastelería</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Electricistas");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={electricistaIcon}
															style={{
																width: "55px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Electricistas</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Reparaciones");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={reparacionIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Reparaciones</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Diseño");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={diseñoIcon}
															style={{
																width: "95px",
																height: "95px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Diseño</b>
															</h5>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="carousel-item">
										<div className="container">
											<div className="row p-1">
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Cuidado de uñas");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={nailsIcon}
															style={{
																width: "90px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Cuidado de uñas</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Transporte");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={transporteIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Transporte</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Tutorías");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={tutoriaIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Tutorías</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														onClick={() => {
															handleCategoria("Otros");
														}}
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={otrosIcon}
															style={{
																width: "100px",
																height: "90px",
																paddingTop: "20px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Otros</b>
															</h5>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<a
									className="carousel-control-prev"
									role="button"
									href="#carouselExampleIndicators"
									data-slide="prev"
									style={{ width: "40px" }}>
									<span className="carousel-control-prev-icon" aria-hidden="true" />
									<span className="visually-hidden" />
								</a>
								<a
									className="carousel-control-next"
									role="button"
									href="#carouselExampleIndicators"
									data-slide="next"
									style={{ width: "40px" }}>
									<span className="carousel-control-next-icon" aria-hidden="true" />
									<span className="visually-hidden" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="newads" className="mb-5 text-center">
				<h2>Nuevas publicaciones</h2>
			</div>

			<div id="adshome" className="container-fluid">
				{/* <div id="newads" className="mb-5 text-center">
					<h2>Nuevas publicaciones</h2>
				</div> */}
				<div className="card-columns">
					{store.servicios.map((servicio, index) => {
						return (
							<div key={index} className="card mb-3 p-0" style={{ maxwidth: "540px" }}>
								<div className="row g-0">
									<div className="col-md-4">
										<img src={servicio.image} style={{ width: "200px", height: "200px" }} />
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">
												<b>{servicio.name}</b>
											</h5>
											<p>
												<b>{servicio.categoria}</b>
											</p>
											<p>
												<p>
													<i className="fas fa-map-marker-alt" /> {" " + servicio.provincia}
												</p>
											</p>
											<p className="card-text">
												<Link to={"/servicio/" + servicio.id}>
													<button type="button" className="btn btn-outline-dark">
														Lo necesito!
													</button>
												</Link>
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
