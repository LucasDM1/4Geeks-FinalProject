import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
	return (
		<div className="container">
			<div className="col-md-5 mx-auto">
				<div id="first">
					<div className="myform form">
						<div className="logo mb-3">
							<div className="col-md-12 text-center">
								<h1>Iniciar sesión</h1>
							</div>
						</div>
						<form action="" method="post" name="login">
							<div className="form-group">
								<label>Correo electrónico</label>
								<input
									type="email"
									name="email"
									className="form-control"
									id="email"
									aria-describedby="emailHelp"
									placeholder="Indique su correo electronico"
								/>
							</div>
							<div className="form-group">
								<label>Contraseña</label>
								<input
									type="password"
									name="password"
									id="password"
									className="form-control"
									aria-describedby="emailHelp"
									placeholder=""
								/>
							</div>
							<div className="form-group">
								<p className="text-center">
									Al registrase o loguearse usted esta aceptando nuestros{" "}
									<a href="#">Terminos y Condiciones</a>
								</p>
							</div>
							<div className="col-md-12 text-center ">
								<button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">
									Login
								</button>
							</div>
							<div className="form-group">
								<p className="text-center">
									¿No estas registrado?{" "}
									<a href="#" id="signup">
										Registrate
									</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
