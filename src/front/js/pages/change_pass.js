import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { Context } from "../store/appContext";

export const Recovery = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState(null);
	const history = useHistory();
	const handleClick = () => {
		actions.precover(email).then(resp => {
			if (store.passwordReset) {
			}
		});
	};
	useEffect(() => {
		actions.resetStore();
	}, []);

	return (
		<div className="container-fluid h-100 pt-3" style={{ margin: "6rem 0 8rem 0" }}>
			{store.token !== null && store.token !== undefined ? (
				history.push("/")
			) : (
				<div className="col-md-5 mx-auto">
					<div className="card">
						<div className="card-body">
							<div id="first">
								<div className="myform form">
									<div className="logo mb-3">
										<div className="col-md-12 text-center">
											<h1>Recuperar contraseña</h1>
											{store.passwordReset ? (
												<div className="alert alert-success" role="alert">
													<h5>Una nueva contraseña se ha enviado a tu correo</h5>
												</div>
											) : null}
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
												value={email}
												onChange={e => setEmail(e.target.value)}
											/>
										</div>
										<div className="col-md-12 text-center ">
											<button
												type="button"
												className=" btn btn-block mybtn btn-primary tx-tfm"
												onClick={handleClick}>
												Iniciar recuperación
											</button>
										</div>
										<div className="form-group">
											<p className="text-center">
												Regresar a{" "}
												<a href="#" id="signup" onClick={() => history.push("/login")}>
													login
												</a>
											</p>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
