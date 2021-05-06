import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { SService } from "../component/singleService";

export const ServiceProfile = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.handleGetUserProfile();
	}, []);

	return (
		<div className="container-fluid" style={{ margin: "6rem 0 4rem 0" }}>
			<h2 className="text-center text-muted">
				Hola {store.perfilUsuario.name}! Estas son tus publicaciones activas 😉
			</h2>
			<div className="row m-4">
				<SService />
				{/* {store.usuarios.map((user, idx) => {
					return user.name;
				})} */}
			</div>
			<div className="row m-4"></div>
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
		</div>
	);
};
