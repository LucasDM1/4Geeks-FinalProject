import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { SService } from "../component/singleService";
import "../../styles/home.scss";

export const ServiceProfile = () => {
	const { store, actions } = useContext(Context);
	const deletePost = pub => {
		actions.pubRm(pub).then(resp => {
			if (store.passwordReset) {
			}
		});
	};

	useEffect(() => {
		actions.handleGetUserProfile();
	}, []);

	const publications = store.servicios.filter(servicio => servicio.user_id == store.perfilUsuario.uid);

	return (
		<div className="container-fluid h-100" style={{ margin: "6rem 0 4rem 0" }}>
			<h2 className="text-center text-muted">
				Hola {store.perfilUsuario.name}! Estas son tus publicaciones activas 😉
			</h2>
			<div className="row m-4">
				{// Lets get our user services if any:
				publications.length ? (
					// publications.map((item, idx) => <SService key={idx} content={item} />

					<div className="card-columns">
						{publications.map((item, idx) => {
							return (
								<div
									key={idx}
									className="card mb-3 p-0"
									style={{ maxwidth: "540px", boxShadow: "10px 10px 20px rgba(0,0,0,0.5)" }}>
									<div className="row g-0">
										<div className="col-md-4">
											<img src={item.image} style={{ width: "200px", height: "200px" }} />
										</div>
										<div className="col-md-8">
											<div className="card-body">
												<h5 className="card-title">
													<b>{item.name}</b>
												</h5>
												<p>
													<b>{item.categoria}</b>
												</p>
												<p>
													<p>
														<i className="fas fa-map-marker-alt" /> {" " + item.provincia}
													</p>
												</p>
												<p className="card-text">
													<Link to={"/servicio/" + item.id}>
														<button
															id="necesito"
															type="button"
															className="btn btn-outline-dark">
															Lo necesito!
														</button>
													</Link>
													<Link to={"/"}>
														<button
															id="nonecesito"
															type="button"
															className="btn btn-outline-dark"
															onClick={() => deletePost(item.id)}>
															{" "}
															Eliminar
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
				) : (
					<Link to="publicar">Vaya vaya... parece que aun no existen publicaciones, te animas?</Link>
				)}
				{
					// console.log(`Debug: ${publications.map((item, idx) => item.name)}`)}
					// <SService />
					/* {store.usuarios.map((user, idx) => {
					return user.name;
				})} */
				}
			</div>
		</div>
	);
};
