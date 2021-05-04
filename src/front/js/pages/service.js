import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Service = () => {
	const { store, actions } = useContext(Context);
	const [proveedor, setProveedor] = useState({});
	const params = useParams();
	const userID = store.servicios[params.index].user_id;

	const getUser = () => {
		console.log(userID);

		let usuario = store.usuarios.filter(user => user.id == userID);
		setProveedor(usuario[0]);
		console.log("user: ", usuario[0]);
		console.log(proveedor);
	};

	return (
		<div className="container-fluid pt-3" style={{ margin: "6rem 0 6rem 0" }}>
			<div className="row justify-content-center">
				<div className="col-10">
					<div className="card" style={{ width: "100%" }}>
						<div className="card-body justify-content-center">
							<h3 className="card-title my-3">{store.servicios[params.index].name}</h3>
							<div className="row">
								<div className="col-4 p-2">
									<div className="row">
										<img
											className="m-3"
											style={{ width: "90%" }}
											src={store.servicios[params.index].image}
										/>
									</div>

									<div className="row justify-content-center">
										<div className="accordion" id="accordionExample">
											<div className="card">
												<div className="card-header w-80 bg-info" id="headingOne">
													<h2 className="mb-0">
														<button
															className="btn btn-block text-left text-white w-100"
															onClick={getUser}
															type="button"
															data-toggle="collapse"
															data-target="#collapseOne"
															aria-expanded="false"
															aria-controls="collapseOne">
															<h6>Contacto</h6>
														</button>
													</h2>
												</div>

												<div
													id="collapseOne"
													className="collapse"
													aria-labelledby="headingOne"
													data-parent="#accordionExample">
													<div className="card-body">
														<p>Publicante: {proveedor.name + " " + proveedor.lastname} </p>
														<p>Telefono: {"+506 " + proveedor.phone} </p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-8">
									<div className="row">
										<div className="col-4">
											<h5>
												<i className="fas fa-map-marker-alt mr-1" />
												Ubicación
											</h5>
											<h5>{store.servicios[params.index].provincia}</h5>
										</div>
										<div className="col-4">
											<h5>
												<i className="far fa-clock mr-1" />
												Horario
											</h5>
											<h5>{store.servicios[params.index].schedule}</h5>
										</div>
										<div className="col-4">
											<h5>
												<i className="fas fa-dollar-sign mr-1" />
												Rango de precios
											</h5>
											<h5>{store.servicios[params.index].price_range}</h5>
										</div>
									</div>
									<div className="row mb-2 px-2">
										<div className="card" style={{ width: "100%" }}>
											<div className="card-body justify-content-center">
												<h5>Descripcion</h5>
												<p>{store.servicios[params.index].description}</p>
											</div>
										</div>
									</div>
									<div className="row mb-2 px-2">
										<div className="card" style={{ width: "100%" }}>
											<div className="card-body justify-content-center">
												<h5>Cometarios</h5>
												<p>
													In convallis, purus nec dignissim ornare, odio urna aliquam nisi, in
													volutpat libero ligula sit amet leo. Suspendisse ac libero mattis,
													tempus nisl sit amet, rutrum nisi. Vestibulum nisl diam, luctus eget
													sapien eu, iaculis feugiat metus.
												</p>
											</div>
										</div>
									</div>
									<div className="row justify-content-center">
										<button type="button" className="btn btn-outline-success">
											Agregar un nuevo cometario ＋
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
