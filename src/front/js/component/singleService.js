import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const SService = props => {
	const { store, actions } = useContext(Context);
	const local_data = props.content;

	return (
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
								<b>Categoria:</b>
								{local_data.categoria}
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
	);
};

SService.propTypes = {
	content: PropTypes.object
};
