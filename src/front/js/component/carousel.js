// import React, { useContext } from "react";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";
// import "../../styles/carousel.scss";
// import "bootstrap/dist/css/bootstrap.css";
// import $ from "jquery";
// import Popper from "popper.js";

// export const Carousel = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div id="backcarousel">
// 			<div className="container-fluid" style={{ margin: "5rem 0 5rem 0" }}>
// 				<div className="row justify-content-center">
// 					<div className="col-10">
// 						<div
// 							id="carouselExampleIndicators"
// 							className="carousel slide"
// 							data-bs-ride="carousel"
// 							style={{ backgroundColor: "red" }}>
// 							<ol className="carousel-indicators">
// 								<li
// 									data-target="#carouselExampleIndicators"
// 									data-slide-to="0"
// 									className="active"
// 									style={{
// 										borderRadius: "50%",
// 										width: "20px",
// 										height: "20px",
// 										backgroundColor: "#fff",
// 										opacity: "0.4"
// 									}}
// 								/>
// 								<li
// 									data-target="#carouselExampleIndicators"
// 									data-slide-to="1"
// 									style={{
// 										borderRadius: "50%",
// 										width: "20px",
// 										height: "20px",
// 										backgroundColor: "#fff",
// 										opacity: "0.4"
// 									}}
// 								/>
// 								<li
// 									data-target="#carouselExampleIndicators"
// 									data-slide-to="2"
// 									style={{
// 										borderRadius: "50%",
// 										width: "20px",
// 										height: "20px",
// 										backgroundColor: "#fff",
// 										opacity: "0.4"
// 									}}
// 								/>
// 								<li
// 									data-target="#carouselExampleIndicators"
// 									data-slide-to="3"
// 									style={{
// 										borderRadius: "50%",
// 										width: "20px",
// 										height: "20px",
// 										backgroundColor: "#fff",
// 										opacity: "0.4"
// 									}}
// 								/>
// 								<li
// 									data-target="#carouselExampleIndicators"
// 									data-slide-to="4"
// 									style={{
// 										borderRadius: "50%",
// 										width: "20px",
// 										height: "20px",
// 										backgroundColor: "#fff",
// 										opacity: "0.4"
// 									}}
// 								/>
// 								<li
// 									data-target="#carouselExampleIndicators"
// 									data-slide-to="5"
// 									style={{
// 										borderRadius: "50%",
// 										width: "20px",
// 										height: "20px",
// 										backgroundColor: "#fff",
// 										opacity: "0.4"
// 									}}
// 								/>
// 							</ol>
// 							<div className="carousel-inner">
// 								<div className="carousel-item active">
// 									<div className="container" alt="First slide">
// 										<div className="row p-1">
// 											<div className="col-sm-12 col-lg-2 ">
// 												<div
// 													className="card p-1"
// 													style={{
// 														width: "160px",
// 														height: "160px"
// 													}}>
// 													<i className="fas fa-birthday-cake fa-5x text-black text-center p-1 " />
// 													<div className="card-body m-0">
// 														{/* <i className="fas fa-birthday-cake fa-5x text-black mx-auto" /> */}
// 														<h5 className="text-center">
// 															<b>Carpintería</b>
// 														</h5>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="carousel-item">
// 									<div className="container" alt="Second slide">
// 										<div className="row p-1">
// 											<div className="col-sm-12 col-lg-2 ">
// 												<div
// 													className="card"
// 													style={{
// 														width: "160px",
// 														height: "160px"
// 													}}>
// 													<div className="card-body">
// 														<i className="fas fa-chair 5x text-black" />
// 														<h5 className="text-center">
// 															<b>Carpintería</b>
// 														</h5>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="carousel-item">
// 									<div className="container">
// 										<div className="row p-1">
// 											<div className="col-sm-12 col-lg-2 ">
// 												<div
// 													className="card"
// 													style={{
// 														width: "160px",
// 														height: "160px"
// 													}}>
// 													<div className="card-body">
// 														<i className="fas fa-chair 5x text-black" />
// 														<h5 className="text-center">
// 															<b>Carpintería</b>
// 														</h5>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="carousel-item">
// 									<div className="container">
// 										<div className="row p-1">
// 											<div className="col-sm-12 col-lg-2 ">
// 												<div
// 													className="card"
// 													style={{
// 														width: "160px",
// 														height: "160px"
// 													}}>
// 													<div className="card-body">
// 														<i className="fas fa-chair 5x text-black" />
// 														<h5 className="text-center">
// 															<b>Carpintería</b>
// 														</h5>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="carousel-item">
// 									<div className="container">
// 										<div className="row p-1">
// 											<div className="col-sm-12 col-lg-2 ">
// 												<div
// 													className="card"
// 													style={{
// 														width: "160px",
// 														height: "160px"
// 													}}>
// 													<div className="card-body">
// 														<i className="fas fa-chair 5x text-black" />
// 														<h5 className="text-center">
// 															<b>Carpintería</b>
// 														</h5>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="carousel-item">
// 									<div className="container">
// 										<div className="row p-1">
// 											<div className="col-sm-12 col-lg-2 ">
// 												<div
// 													className="card"
// 													style={{
// 														width: "160px",
// 														height: "160px"
// 													}}>
// 													<div className="card-body">
// 														<i className="fas fa-chair 5x text-black" />
// 														<h5 className="text-center">
// 															<b>Carpintería</b>
// 														</h5>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<a
// 								className="carousel-control-prev"
// 								role="button"
// 								href="#carouselExampleIndicators"
// 								data-slide="prev"
// 								style={{ width: "40px" }}>
// 								<span className="carousel-control-prev-icon" aria-hidden="true" />
// 								<span className="visually-hidden" />
// 							</a>
// 							<a
// 								className="carousel-control-next"
// 								role="button"
// 								href="#carouselExampleIndicators"
// 								data-slide="next"
// 								style={{ width: "40px" }}>
// 								<span className="carousel-control-next-icon" aria-hidden="true" />
// 								<span className="visually-hidden" />
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
