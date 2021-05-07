import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import "../../styles/serviciosPyC.scss";

export const StateService = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const sessProv = JSON.parse(sessionStorage.getItem("provs"));

	let ultimabusqueda = sessProv["ultimabusqueda"];

	console.log(ultimabusqueda.length);
	useEffect(() => {
		actions.closeMenu();
	}, []);

	if (ultimabusqueda.length != 0) {
		return (
			<div className="container-fluid h-100 pt-5" style={{ marginBottom: "5rem" }}>
				<div className="row mb-3 pl-3">
					<h2>{"Publicaciones en " + params.provincia + ": "}</h2>
				</div>

				<div className="card-columns">
					{ultimabusqueda.map((servicio, index) => {
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
												<Link to={"/servicio/" + servicio.id}>
													<button
														id="necesito"
														type="button"
														className="btn btn-outline-dark">
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
		);
	} else {
		return (
			<div className="container-fluid d-flex h-100 justify-content-center mt-5 pt-5">
				<div className="row ">
					<div className="col-2" />
					<div className="col-8">
						<div className="card w-100">
							<div className="card-body">
								<h2 className="card-title mb-2">No hay publicaciones para esta provincia aún</h2>
								<h5>
									Ayúdanos expandiendo la plataforma, crea tus publicaciones y compartelas con tus
									amigos y conocidos, así nos ayudas y te ayudamos a salir adelante.
								</h5>
								<Link to="/">
									<button type="button" className="btn backpage my-3">
										{" "}
										<b>Regresar a la pagina principal</b>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
