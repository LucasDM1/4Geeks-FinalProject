import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Service = () => {
	return (
		<div className="container-fluid pt-3" style={{ margin: "6rem 0 6rem 0" }}>
			<div className="row justify-content-center">
				<div className="col-10">
					<div className="card" style={{ width: "100%" }}>
						<div className="card-body justify-content-center">
							<h3 className="card-title ">Nombre del oferente</h3>
							<div className="row">
								<div className="col-4">
									<div className="row">
										<img style={{ width: "100%" }} src="https://fakeimg.pl/100x100/?text=Profile" />
									</div>
									<div className="row">
										<ul>
											<li>Servicio que brinda</li>
											<li>Servicio que brinda</li>
											<li>Servicio que brinda</li>
											<li>Servicio que brinda</li>
										</ul>
									</div>
									<div className="row justify-content-center">
										<button type="button" className="btn btn-outline-info">
											Contacto
										</button>
									</div>
								</div>
								<div className="col-8">
									<div className="row">
										<div className="col-4">
											<h5>
												<i className="fas fa-map-marker-alt mr-1" />
												Ubicación
											</h5>
											<h6>San Jose</h6>
										</div>
										<div className="col-4">
											<h5>
												<i className="far fa-clock mr-1" />
												Horario
											</h5>
											<h5>L-V: 7:00 am - 5:00 pm</h5>
										</div>
										<div className="col-4">
											<h5>
												<i className="fas fa-dollar-sign mr-1" />
												Rango de precios
											</h5>
											<h5>$-$$$</h5>
										</div>
									</div>
									<div className="row mb-2 px-2">
										<div className="card" style={{ width: "100%" }}>
											<div className="card-body justify-content-center">
												<h5>Descripcion</h5>
												<p>
													In convallis, purus nec dignissim ornare, odio urna aliquam nisi, in
													volutpat libero ligula sit amet leo. Suspendisse ac libero mattis,
													tempus nisl sit amet, rutrum nisi. Vestibulum nisl diam, luctus eget
													sapien eu, iaculis feugiat metus.
												</p>
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
