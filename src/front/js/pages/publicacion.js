import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Publish = () => {
	const { store, actions } = useContext(Context);

	const [image, SetImage] = useState("");
	const [categoria, setCategoria] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [experiencia, setExperiencia] = useState("");
	const [provincia, setProvincia] = useState("");
	const [abierto, setAbierto] = useState("");
	const [cerrado, setCerrado] = useState("");
	const [abierto1, setAbierto1] = useState("");
	const [cerrado1, setCerrado1] = useState("");
	const [min, setMin] = useState("");
	const [max, setMax] = useState("");
	const [detalle, setDetalle] = useState("");

	const [horario, setHorario] = useState("");
	const [precio, setPrecio] = useState("");

	return (
		<div className="container-fluid my-5 py-3 justify-content-center">
			<div className="card" style={{ width: "80%" }}>
				<div className="card-body">
					<h1>Cuéntanos sobre tu servicio:</h1>
					<div className="row d-flex justify-content-center">
						<form>
							<div className="form-row ml-auto">
								<div className="form-group m-2">
									<label>¿Cómo se ven tus servicios?</label>
									<input
										type="file"
										name="imagen"
										onChange={e => SetImage(e.target.value)}
										value={image}
										className="form-control p-1"
										id="imagenPublicacion"
									/>
								</div>
								<div className="form-group m-2">
									<label>Categoría</label>
									<select
										id="inputCategory"
										onChange={e => setCategoria(e.target.value)}
										value={categoria}
										className="form-control">
										<option value>Elije una categoría...</option>
										<option>...</option>
									</select>
								</div>
							</div>
							<div className="form-row ml-auto">
								<div className="form-group">
									<label>¿Cuál es tu experiencia en esta categoria de servicios?</label>
									<textarea
										className="form-control"
										id="exp_detail"
										rows="2"
										onChange={e => setExperiencia(e.target.value)}
										value={experiencia}
									/>

									<div className="form-group mx-sm-3 my-2">
										<label>¿En donde puedes brindar tu servicio?</label>
										<select
											id="Provincia"
											className="form-control"
											onChange={e => setProvincia(e.target.value)}
											value={provincia}>
											<option value>Provincia...</option>
											<option>San José</option>
											<option>Alajuela</option>
											<option>Cartago</option>
											<option>Heredia</option>
											<option>Puntarenas</option>
											<option>Guanacaste</option>
											<option>Limon</option>
										</select>
									</div>
								</div>
							</div>
							<h6>¿En que horas puedes ofrecer tu servicio?</h6>
							<div className="form-row">
								<div className="form-group m-2">
									<label>Desde:</label>
									<select
										id="inittime"
										className="form-control"
										onChange={e => setAbierto(e.target.value)}
										value={abierto}>
										<option value>Hora de Inicio...</option>
										<option>00:00</option>
										<option>01:00</option>
										<option>02:00</option>
										<option>03:00</option>
										<option>04:00</option>
										<option>05:00</option>
										<option>06:00</option>
										<option>07:00</option>
										<option>08:00</option>
										<option>09:00</option>
										<option>10:00</option>
										<option>11:00</option>
										<option>12:00</option>
									</select>
								</div>
								<div className="form-group m-2">
									<label>¿AM o PM?</label>
									<select
										id="i-ampm"
										className="form-control"
										onChange={e => setAbierto1(e.target.value)}
										value={abierto1}>
										<option value>AM</option>
										<option>PM</option>
									</select>
								</div>
								<div className="form-group m-2">
									<label>Hasta:</label>
									<select
										id="endtime"
										className="form-control"
										onChange={e => setCerrado(e.target.value)}
										value={cerrado}>
										<option value>Hora de fin...</option>
										<option>00:00</option>
										<option>01:00</option>
										<option>02:00</option>
										<option>03:00</option>
										<option>04:00</option>
										<option>05:00</option>
										<option>06:00</option>
										<option>07:00</option>
										<option>08:00</option>
										<option>09:00</option>
										<option>10:00</option>
										<option>11:00</option>
										<option>12:00</option>
									</select>
								</div>
								<div className="form-group m-2">
									<label>¿AM o PM?</label>
									<select
										id="e-ampm"
										className="form-control"
										onChange={e => setCerrado1(e.target.value)}
										value={cerrado1}>
										<option>AM</option>
										<option value>PM</option>
									</select>
								</div>
							</div>
							<h6>¿Cuál es el precio de tus servicios?</h6>
							<div className="form-row">
								<div className="form-group m-2">
									<label>Desde:</label>
									<input
										className="form-control"
										type="text"
										placeholder="$0"
										onChange={e => setMin(e.target.value)}
										value={min}
									/>
								</div>
								<div className="form-group m-2">
									<label>Hasta:</label>
									<input
										className="form-control"
										type="text"
										placeholder="$500"
										onChange={e => setMax(e.target.value)}
										value={max}
									/>
								</div>
							</div>{" "}
							<h6 className="mt-3">¿Algún detalle específico o descripción adicional?</h6>
							<div className="form-row p-3">
								<div className="form-group">
									<label>Detalles:</label>
									<textarea
										className="form-control"
										id="exp_detail"
										rows="4"
										onChange={e => setDetalle(e.target.value)}
										value={detalle}
									/>
								</div>
							</div>
							<button
								type="button"
								onClick={() => (
									setHorario(abierto + " " + abierto1 + "-" + cerrado + " " + cerrado1),
									setPrecio("¢ " + min + "- ¢ " + max),
									console.log(image, categoria, experiencia, provincia, horario, precio, detalle)
								)}
								className="btn btn-primary">
								Crear Publicación
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
