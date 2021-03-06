import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/publicacion.scss";

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
	const [notmissing, setNotmissing] = useState("");

	const history = useHistory();
	const token = sessionStorage.getItem("token");

	const handlePost = () => {
		if (
			nombre == "" ||
			image == "" ||
			categoria == "Elije una categoría..." ||
			descripcion == "" ||
			provincia == "Provincia..." ||
			abierto == "Hora de Inicio..." ||
			cerrado == "Hora de fin..." ||
			min == "" ||
			max == ""
		) {
			// console.log(nombre, image, categoria, descripcion, provincia, abierto, cerrado, min, max);
			setNotmissing(true);
			actions.closeMenu();
		} else {
			setNotmissing(false);
			actions.closeMenu();
			actions.handlePublication(nombre, image, categoria, descripcion, provincia, abierto, cerrado, min, max);
		}
	};
	const handleSuccess = () => {
		(store.publicarSuccess = false), history.push("/perfildeservicio");
	};
	useEffect(() => {
		actions.closeMenu();
	}, []);

	return (
		<div className="container-fluid h-100 my-5">
			<div className="row justify-content-center">
				<div id="crearpublicacion" className="card">
					<div className="card-body justify-content-center">
						<h1 className="container-fluid mb-3 pl-5 text-center">Cuéntanos sobre tu servicio</h1>
						{store.publicarSuccess == true ? (
							<div className="alert alert-success mx-5" role="alert">
								<h5 onClick={handleSuccess}>
									Se ha publicado tu servicio con exito, puedes revisarla en tu perfil de servicio
								</h5>
							</div>
						) : null}
						{notmissing == true ? (
							<div className="alert alert-danger mx-5" role="alert">
								<h5>Completa todos los campos para poder realizar tu publicación</h5>
							</div>
						) : null}
						<div className="row d-flex justify-content-center">
							<div className="col-5">
								<h5>Nombre de la Publicación</h5>
								<input
									type="text" //cambiar a file
									name="nombre"
									onChange={e => setNombre(e.target.value)}
									placeholder="Describe brevemente lo que haces"
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
									<option value>Elige una categoría...</option>
									<option>Carpintería</option>
									<option>Cerrajería</option>
									<option>Mecánica</option>
									<option>Albañilería</option>
									<option>Fontanería</option>
									<option>Soldaduras</option>
									<option>Pintores</option>
									<option>Sastrería</option>
									<option>Cocineros</option>
									<option>Lavandería</option>
									<option>Construcción</option>
									<option>Locución</option>
									<option>Animador de eventos</option>
									<option>Panadería</option>
									<option>Costurería</option>
									<option>Peluquería</option>
									<option>Zapateros</option>
									<option>Niñeros</option>
									<option>Cuidadores</option>
									<option>Serigrafía</option>
									<option>Fotocopiadora</option>
									<option>Catering</option>
									<option>Pastelería</option>
									<option>Electricistas</option>
									<option>Reparaciones</option>
									<option>Diseño</option>
									<option>Cuidado de uñas</option>
									<option>Transporte</option>
									<option>Limpieza</option>
									<option>Tutorías</option>
									<option>Otros</option>
								</select>

								<h5>¿Cómo se ven tus servicios?</h5>
								<input
									type="text" //cambiar a file
									name="imagen"
									onChange={e => SetImage(e.target.value)}
									value={image}
									placeholder="Utiliza una dirección de url, con las terminaciones .jpg, .png, o .svc"
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
								<h5>¿En dónde puedes brindar tu servicio?</h5>
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
								id="botoncrearpubliacacion"
								type="button"
								onClick={handlePost}
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
