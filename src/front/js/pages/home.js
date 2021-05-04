import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid" style={{ marginBottom: "5rem" }}>
			<div className="card-columns">
				{store.servicios.map((servicio, index) => {
					return (
						<div key={index} className="card mb-3" style={{ maxwidth: "540px" }}>
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

			{/* <div className="row m-4">
				<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
					<div className="card mb-3" style={{ maxwidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://picsum.photos/200/200" style={{ width: "200px", height: "200px" }} />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<b>Nombre del servicio</b>
									</h5>
									<p>
										<b>Categoria</b>
									</p>
									<p>
										<b>Ubicacion</b>
									</p>
									<p className="card-text">
										<button type="button" className="btn btn-outline-dark">
											More information
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
					<div className="card mb-3" style={{ maxwidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://picsum.photos/200/200" style={{ width: "200px", height: "200px" }} />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<b>Nombre del servicio</b>
									</h5>
									<p>
										<b>Categoria</b>
									</p>
									<p>
										<b>Ubicacion</b>
									</p>
									<p className="card-text">
										<button type="button" className="btn btn-outline-dark">
											More information
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
					<div className="card mb-3" style={{ maxwidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://picsum.photos/200/200" style={{ width: "200px", height: "200px" }} />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<b>Nombre del servicio</b>
									</h5>
									<p>
										<b>Categoria</b>
									</p>
									<p>
										<b>Ubicacion</b>
									</p>
									<p className="card-text">
										<button type="button" className="btn btn-outline-dark">
											More information
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row m-4">
				<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
					<div className="card mb-3" style={{ maxwidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://picsum.photos/200/200" style={{ width: "200px", height: "200px" }} />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<b>Nombre del servicio</b>
									</h5>
									<p>
										<b>Categoria</b>
									</p>
									<p>
										<b>Ubicacion</b>
									</p>
									<p className="card-text">
										<button type="button" className="btn btn-outline-dark">
											More information
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
					<div className="card mb-3" style={{ maxwidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://picsum.photos/200/200" style={{ width: "200px", height: "200px" }} />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<b>Nombre del servicio</b>
									</h5>
									<p>
										<b>Categoria</b>
									</p>
									<p>
										<b>Ubicacion</b>
									</p>
									<p className="card-text">
										<button type="button" className="btn btn-outline-dark">
											More information
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
					<div className="card mb-3" style={{ maxwidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://picsum.photos/200/200" style={{ width: "200px", height: "200px" }} />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<b>Nombre del servicio</b>
									</h5>
									<p>
										<b>Categoria</b>
									</p>
									<p>
										<b>Ubicacion</b>
									</p>
									<p className="card-text">
										<button type="button" className="btn btn-outline-dark">
											More information
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row m-4">
				<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
					<div className="card mb-3" style={{ maxwidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://picsum.photos/200/200" style={{ width: "200px", height: "200px" }} />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<b>Nombre del servicio</b>
									</h5>
									<p>
										<b>Categoria</b>
									</p>
									<p>
										<b>Ubicacion</b>
									</p>
									<p className="card-text">
										<button type="button" className="btn btn-outline-dark">
											More information
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
					<div className="card mb-3" style={{ maxwidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://picsum.photos/200/200" style={{ width: "200px", height: "200px" }} />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<b>Nombre del servicio</b>
									</h5>
									<p>
										<b>Categoria</b>
									</p>
									<p>
										<b>Ubicacion</b>
									</p>
									<p className="card-text">
										<button type="button" className="btn btn-outline-dark">
											More information
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-4 col-md-4 col-lg-4 col-xs-6">
					<div className="card mb-3" style={{ maxwidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://picsum.photos/200/200" style={{ width: "200px", height: "200px" }} />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<b>Nombre del servicio</b>
									</h5>
									<p>
										<b>Categoria</b>
									</p>
									<p>
										<b>Ubicacion</b>
									</p>
									<p className="card-text">
										<button type="button" className="btn btn-outline-dark">
											More information
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};
