import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Publish = () => {
	return (
		<div className="container-fluid p-3 my-3 border">
			<h1>Cuéntanos sobre tu servicio:</h1>
			<div className="row d-flex justify-content-center">
				<form>
					<div className="form-row">
						<div className="form-group m-2">
							<label>¿Cómo se ven tus servicios?</label>
							<input type="file" className="form-control p-1" id="imagenPublicacion" />
						</div>
						<div className="form-group m-2">
							<label>Categoría</label>
							<select id="inputCategory" className="form-control">
								<option selected>Elije una categoría...</option>
								<option>...</option>
							</select>
						</div>
					</div>
					<div className="form-row p-3">
						<div className="form-group">
							<label>¿Cuál es tu experiencia en esta categoria de servicios?</label>
							<textarea className="form-control" id="exp_detail" rows="2" />
							<div className="form-group mx-sm-3 my-2">
								<label>¿En donde puedes brindar tu servicio?</label>
								<select id="Provincia" className="form-control">
									<option selected>Provincia...</option>
									<option>San José</option>
								</select>
								<select id="Cantón" className="form-control">
									<option selected>Cantón...</option>
									<option>San José</option>
								</select>
								<select id="Distrito" className="form-control">
									<option selected>Distrito...</option>
									<option>San José</option>
								</select>
							</div>
						</div>
					</div>
					<h6>¿En que horas puedes ofrecer tu servicio?</h6>
					<div className="form-row">
						<div className="form-group m-2">
							<label>Desde:</label>
							<select id="inittime" className="form-control">
								<option selected>Hora de Inicio...</option>
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
							<select id="i-ampm" className="form-control">
								<option selected>AM</option>
								<option>PM</option>
							</select>
						</div>
						<div className="form-group m-2">
							<label>Hasta:</label>
							<select id="endtime" className="form-control">
								<option selected>Hora de fin...</option>
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
							<select id="e-ampm" className="form-control">
								<option>AM</option>
								<option selected>PM</option>
							</select>
						</div>
					</div>
					<h6>¿Cuál es el precio de tus servicios?</h6>
					<div className="form-row">
						<div className="form-group m-2">
							<label>Desde:</label>
							<input className="form-control" type="text" placeholder="$0" />
						</div>
						<div className="form-group m-2">
							<label>Hasta:</label>
							<input className="form-control" type="text" placeholder="$500" />
						</div>
					</div>{" "}
					<h6 className="mt-3">¿Algún detalle específico o descripción adicional?</h6>
					<div className="form-row p-3">
						<div className="form-group">
							<label>Detalles:</label>
							<textarea className="form-control" id="exp_detail" rows="4" />
						</div>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
