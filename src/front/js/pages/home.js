import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import carpinteriaIcon from "../../img/carpinteria.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid p-0" style={{ marginBottom: "5rem", margin: "50px, 0" }}>
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
																height: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
																height: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
																height: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Panadería</b>
															</h5>
														</div>
													</div>
												</div>
												<div className="col-sm-12 col-lg-2 ">
													<div
														className="card categoria p-1"
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
																height: "85px",
																paddingTop: "15px"
															}}
														/>
														{/* <i className="fas fa-birthday-cake fa-5x text-center p-1 " /> */}
														<div className="card-body m-0">
															<h5 className="text-center text-white categorytitle">
																<b>Cuidadores de adultos</b>
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
																height: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
																height: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
															style={{
																width: "85px",
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
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
														style={{
															width: "160px",
															height: "160px"
														}}>
														<img
															src={carpinteriaIcon}
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
												<Link to={"/servicio/" + index}>
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
