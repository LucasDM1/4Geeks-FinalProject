import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Publish = () => {
	const { store, actions } = useContext(Context);
	const [nombre, setNombre] = useState("");
	const [image, SetImage] = useState("");
	const [categoria, setCategoria] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [provincia, setProvincia] = useState("");
	const [abierto, setAbierto] = useState("");
	const [cerrado, setCerrado] = useState("");
	const [min, setMin] = useState("");
	const [max, setMax] = useState("");

	return (
		<div className="container-fluid my-5 py-3 ">
			<div className="row justify-content-center">
				<div className="card w-100 m-5">
					<div className="card-body justify-content-center">
						<h1 className="container-fluid mb-3 pl-5 ">Cuéntanos sobre tu servicio</h1>

						<div className="row d-flex justify-content-center">
							<div className="col-5">
								<h5>Nombre de la Publicación</h5>
								<input
									type="text" //cambiar a file
									name="nombre"
									onChange={e => (setNombre(e.target.value), console.log(nombre))}
									value={nombre}
									className="form-control mb-2 p-1"
									id="nombrePublicacion"
								/>

								<h5>Categoría</h5>
								<select
									id="inputCategory"
									onChange={e => setCategoria(e.target.value)}
									value={categoria}
									className="form-control mb-2">
									<option value>Elije una categoría...</option>
									<option>...</option>
								</select>

								<h5>¿Cómo se ven tus servicios?</h5>
								<input
									type="text" //cambiar a file
									name="imagen"
									onChange={e => (SetImage(e.target.value), console.log(image))}
									value={image}
									className="form-control mb-2 p-1"
									id="imagenPublicacion"
								/>
							</div>
							<div className="col-5">
								<div className="row">
									<div className="col-6">
										<h5>Desde:</h5>
										<select
											id="inittime"
											className="form-control mb-2"
											onChange={e => setAbierto(e.target.value)}
											value={abierto}>
											<option value>Hora de Inicio...</option>
											<option>00:00 AM</option>
											<option>01:00 AM</option>
											<option>02:00 AM</option>
											<option>03:00 AM</option>
											<option>04:00 AM</option>
											<option>05:00 AM</option>
											<option>06:00 AM</option>
											<option>07:00 AM</option>
											<option>08:00 AM</option>
											<option>09:00 AM</option>
											<option>10:00 AM</option>
											<option>11:00 AM</option>
											<option>12:00 PM</option>
											<option>01:00 PM</option>
											<option>02:00 PM</option>
											<option>03:00 PM</option>
											<option>04:00 PM</option>
											<option>05:00 PM</option>
											<option>06:00 PM</option>
											<option>07:00 PM</option>
											<option>08:00 PM</option>
											<option>09:00 PM</option>
											<option>10:00 PM</option>
											<option>11:00 PM</option>
										</select>
									</div>
									<div className="col-6">
										<h5>Hasta:</h5>
										<select
											id="endtime"
											className="form-control mb-2"
											onChange={e => setCerrado(e.target.value)}
											value={cerrado}>
											<option value>Hora de fin...</option>
											<option>00:00 AM</option>
											<option>01:00 AM</option>
											<option>02:00 AM</option>
											<option>03:00 AM</option>
											<option>04:00 AM</option>
											<option>05:00 AM</option>
											<option>06:00 AM</option>
											<option>07:00 AM</option>
											<option>08:00 AM</option>
											<option>09:00 AM</option>
											<option>10:00 AM</option>
											<option>11:00 AM</option>
											<option>12:00 PM</option>
											<option>01:00 PM</option>
											<option>02:00 PM</option>
											<option>03:00 PM</option>
											<option>04:00 PM</option>
											<option>05:00 PM</option>
											<option>06:00 PM</option>
											<option>07:00 PM</option>
											<option>08:00 PM</option>
											<option>09:00 PM</option>
											<option>10:00 PM</option>
											<option>11:00 PM</option>
										</select>
									</div>
								</div>
								<h5>¿En donde puedes brindar tu servicio?</h5>
								<select
									id="Provincia"
									className="form-control mb-2"
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
								<div className="row">
									<div className="col-6">
										<h5>Desde:</h5>
										<input
											className="form-control mb-2"
											type="text"
											placeholder="$0"
											onChange={e => setMin(e.target.value)}
											value={min}
										/>
									</div>
									<div className="col-6">
										<h5>Hasta:</h5>
										<input
											className="form-control mb-2"
											type="text"
											placeholder="$500"
											onChange={e => setMax(e.target.value)}
											value={max}
										/>
									</div>
								</div>
							</div>
							<div className="col-10">
								<h5>Describe tu servicio</h5>
								<textarea
									className="form-control mb-2"
									id="exp_detail"
									rows="2"
									onChange={e => setDescripcion(e.target.value)}
									placeholder="Aquí puedes describir tu experiencia, servicios, lo que incluyen y detalles referentes al servicio"
									value={descripcion}
								/>
							</div>
						</div>
						<div className="row justify-content-center">
							<button
								type="button"
								onClick={() => (
									console.log(
										nombre,
										image,
										categoria,
										descripcion,
										provincia,
										abierto,
										cerrado,
										max,
										min
									),
									actions.handlePublication(
										nombre,
										image,
										categoria,
										descripcion,
										provincia,
										abierto,
										cerrado,
										min,
										max
									)
								)}
								className="btn btn-primary">
								Crear Publicación
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
