import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [cedula, setCedula] = useState("");
	const [password, setPassword] = useState("");
	const [password1, setPassword1] = useState("");
	const [email, setEmail] = useState("");
	const [terminos, setTerminos] = useState("");

	return (
		<div className="container-fluid ">
			<div className="row d-flex justify-content-center">
				<div className="card">
					<div className="card-body py-2">
						<h1 className="card-title">Registrate</h1>
						<form>
							<div className="row">
								<div className="col-6">
									<div className="mb-3">
										<label htmlFor="name" className="form-label">
											Nombre
										</label>
										<input
											type="text"
											value={name}
											onChange={e => setName(e.target.value)}
											className="form-control"
											id="name"
											required
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="mb-3">
										<label htmlFor="lastname" className="form-label">
											Apellido
										</label>
										<input
											type="text"
											value={lastname}
											onChange={e => setLastname(e.target.value)}
											className="form-control"
											id="lastname"
											required
										/>
									</div>
								</div>
							</div>

							<div className="mb-3">
								<label htmlFor="cedula" className="form-label">
									Cédula
								</label>
								<input
									type="text"
									className="form-control"
									value={cedula}
									onChange={e => setCedula(e.target.value)}
									id="cedula"
									placeholder="111561587"
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									type="email"
									value={email}
									onChange={e => setEmail(e.target.value)}
									className="form-control"
									id="email"
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="password" className="form-label">
									Password
								</label>
								<input
									type="password"
									value={password}
									onChange={e => setPassword(e.target.value)}
									className="form-control"
									id="password"
									required
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="ConfirmPassword" className="form-label">
									Password
								</label>
								<input
									type="password"
									value={password1}
									onChange={e => setPassword1(e.target.value)}
									className="form-control"
									id="ConfirmPassword"
									required
								/>
							</div>

							<div className="mb-3 form-check">
								<input
									type="checkbox"
									value={terminos}
									onChange={e => setTerminos(e.target.value)}
									className="form-check-input"
									id="condiciones"
									required
								/>
								<label className="form-check-label" htmlFor="condiciones">
									Acepto los <a href="#">Terminos de servicio y Condiciones</a>
								</label>
							</div>
							<button
								type="button"
								onClick={() => {
									console.log(name, lastname, cedula, email, password, password1, terminos);
								}}
								className="btn btn-primary mr-auto">
								Registrarse
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
