import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";

export const Carousel = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid" style={{ margin: "5rem 0 5rem 0" }}>
			<div className="row justify-content-center">
				<div className="col-10">
					<div
						id="carouselExampleIndicators"
						className="carousel slide"
						data-bs-ride="carousel"
						// style={{ backgroundColor: "#fff" }}
					>
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
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<div className="container" alt="First slide">
									<div className="row p-1">
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://picsum.photos/250"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-center">
													<b>Carpintería</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://picsum.photos/250"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-center">
													<b>Cerrajería</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://picsum.photos/250"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-center">
													<b>Mecánica</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://picsum.photos/250"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-center">
													<b>Albañilería</b>
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="container" alt="Second slide">
									<div className="row p-1">
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://neilpatel.com/wp-content/uploads/2017/08/colors.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title">
													<b>Fontanería</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://neilpatel.com/wp-content/uploads/2017/08/colors.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title">
													<b>Soldaduras</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://neilpatel.com/wp-content/uploads/2017/08/colors.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title">
													<b>Pintores de casas</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3 ">
											<img
												src="https://neilpatel.com/wp-content/uploads/2017/08/colors.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title">
													<b>Sastrería</b>
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="container">
									<div className="row p-1">
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Choferes</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Cocineros</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Lavandería</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Obrero</b>
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="container">
									<div className="row p-1">
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Locutor</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Animador</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Panadería</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Costureras</b>
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="container">
									<div className="row p-1">
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Mascotas</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Barbería</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Peluquería</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Zapateros</b>
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="container">
									<div className="row p-1">
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Niñeras</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Cuidadores</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Serígrafía</b>
												</h5>
											</div>
										</div>
										<div className="col-sm-12 col-lg-3">
											<img
												src="https://www.hola.com/imagenes/cocina/recetas/20201009176964/pan-de-leche-thermomix-casero/0-876-239/receta-pan-thermomix-bollo-leche-m.jpg"
												className="card-img"
												style={{
													width: "250px",
													height: "250px"
												}}
											/>
											<div className="card-img-overlay">
												<h5 className="card-title text-dark text-center">
													<b>Imprenta</b>
												</h5>
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
	);
};
