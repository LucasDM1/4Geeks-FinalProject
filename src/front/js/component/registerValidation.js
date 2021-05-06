export const Validation = values => {
	let errors = {};

	if (!values.name) {
		errors.name = "Es necesario un Nombre";
	}

	if (!values.lastname) {
		errors.lastname = "Es necesario un Apellido";
	}

	if (!values.cedula) {
		errors.cedula = "Es necesario colocar un número de cédula";
	}

	if (values.cedula.length < 9) {
		errors.cedula = "La cédula debe tener 9 digitos";
	}

	if (!values.phone) {
		errors.phone = "Es necesario un número de teléfono";
	}

	if (values.phone.length < 8) {
		errors.phone = "El número debe tener 8 digitos";
	}

	if (values.password.length < 8) {
		errors.password = "La contraseña debe tener al menos 8 digitos";
	}

	if (values.password.length > 16) {
		errors.password = "La contraseña no puede ser mayor a 16 digitos";
	}

	if (!values.password1) {
		errors.password1 = "Confirme su contraseña";
	}

	if (values.password1 !== values.password) {
		errors.password1 = "Las contraseñas no coinciden";
	}

	if (!values.email) {
		errors.email = "Es necesario un correo electrónico";
	}

	if (!values.email.includes("@")) {
		errors.email = "Ingrese un correo electrónico valido";
	}

	if (values.condiciones == false) {
		errors.condiciones = "Debe aceptar los terminos y condiciones";
	}
	console.log(errors);
	return errors;
};
