import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Validation } from "../component/registerValidation";
import "../../styles/register.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	// programando validación
	const [values, setValues] = useState({
		name: "",
		lastname: "",
		cedula: "",
		phone: "",
		password: "",
		password1: "",
		email: "",
		condiciones: false
	});

	const [errors, setErrors] = useState({});

	const handleChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setErrors(Validation(values));
		console.log(errors);
		if (values.errors == null) {
			console.log(values.name, values.lastname, values.cedula, values.phone, values.email, values.password);
			actions.handleRegister(
				values.name,
				values.lastname,
				values.cedula,
				values.phone,
				values.email,
				values.password
			);
		}
	};
	const handleSucc = () => {
		(store.registerSuccess = false), history.push("/login");
	};

	return (
		<div className="container-fluid h-100" style={{ margin: "5rem 0 5rem 0" }}>
			<div className="row d-flex justify-content-center">
				<div id="RegisterForm" className="card">
					<div className="card-body py-2">
						<h1 className="card-title text-center">Registrate</h1>
						{store.registerSuccess == true ? (
							<div className="alert alert-success" role="alert">
								<h5 onClick={handleSucc}>Registo completo, click aquí para Iniciar Sesion</h5>
							</div>
						) : null}
						{store.registerProblem == true ? (
							<div className="alert alert-danger" role="alert">
								Registo completo, click aquí para Iniciar Sesion
							</div>
						) : null}
						<form>
							<div className="row">
								<div className="col-6">
									<div className="mb-3">
										<label htmlFor="name" className="form-label">
											Nombre
										</label>
										<input
											type="text"
											value={values.name}
											name="name"
											onChange={handleChange}
											className="form-control"
											id="name"
											required
										/>
										{errors.name && (
											<p className="error" style={{ color: "#942222" }}>
												{errors.name}
											</p>
										)}
									</div>
								</div>
								<div className="col-6">
									<div className="mb-3">
										<label htmlFor="lastname" className="form-label">
											Apellido
										</label>
										<input
											type="text"
											value={values.lastname}
											name="lastname"
											onChange={handleChange}
											className="form-control"
											id="lastname"
											required
										/>
										{errors.lastname && (
											<p className="error" style={{ color: "#942222" }}>
												{errors.lastname}
											</p>
										)}
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
									value={values.cedula}
									name="cedula"
									onChange={handleChange}
									id="cedula"
									placeholder="123456789"
									required
								/>
								{errors.cedula && (
									<p className="error" style={{ color: "#942222" }}>
										{errors.cedula}
									</p>
								)}
							</div>
							<div className="mb-3">
								<label htmlFor="cedula" className="form-label">
									Número de teléfono
								</label>
								<input
									type="text"
									className="form-control"
									value={values.phone}
									name="phone"
									onChange={handleChange}
									id="phone"
									placeholder="88888888"
									required
								/>
								{errors.phone && (
									<p className="error" style={{ color: "#942222" }}>
										{errors.phone}
									</p>
								)}
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">
									Correo electrónico
								</label>
								<input
									type="email"
									value={values.email}
									name="email"
									onChange={handleChange}
									className="form-control"
									id="email"
									required
								/>
								{errors.email && (
									<p className="error" style={{ color: "#942222" }}>
										{errors.email}
									</p>
								)}
							</div>
							<div className="mb-3">
								<label htmlFor="password" className="form-label">
									Contraseña
								</label>
								<input
									type="password"
									value={values.password}
									name="password"
									onChange={handleChange}
									className="form-control"
									id="password"
									required
								/>
								{errors.password && (
									<p className="error" style={{ color: "#942222" }}>
										{errors.password}
									</p>
								)}
							</div>

							<div className="mb-3">
								<label htmlFor="password" className="form-label">
									Confirmar constraseña
								</label>
								<input
									type="password"
									value={values.password1}
									name="password1"
									onChange={handleChange}
									className="form-control"
									id="pasword1"
									required
								/>
								{errors.password1 && (
									<p className="error" style={{ color: "#942222" }}>
										{errors.password1}
									</p>
								)}
							</div>
							<div className="mb-3 form-check">
								<input
									type="checkbox"
									value={values.condiciones}
									name="condiciones"
									onClick={handleChange}
									className="form-check-input"
									id="condiciones"
									required
								/>
								<label className="form-check-label" htmlFor="condiciones">
									Acepto los <a href="#">Terminos de servicio y Condiciones</a>
								</label>
								{errors.condiciones && (
									<p className="error" style={{ color: "#942222" }}>
										{errors.condiciones}
									</p>
								)}
							</div>
							<button type="submit" onClick={handleSubmit} className="btn mr-auto" id="RegistrarseForm">
								Registrarse
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
