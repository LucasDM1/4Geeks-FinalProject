const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			registerSuccess: false,
			registerProblem: false,
			registerError: null,
			token: null,
			publicarSuccess: false,
			loginError: false,
			servicios: [],
			usuarios: [],
			perfilUsuario: []
		},

		actions: {
			logOut: () => {
				setStore({ token: null });
				sessionStorage.setItem("token", null);
			},
			login: async (myEmail, myPassword) => {
				const url = process.env.BACKEND_URL + "/api/login";

				await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: myEmail,
						password: myPassword
					})
				})
					.then(resp => {
						if (resp.status !== 200) {
							setStore({ loginError: true });
							return resp.json();
						} else {
							setStore({ loginError: false });
							return resp.json();
						}
					})
					.then(data => {
						console.log("This came from the backend ", data);
						sessionStorage.setItem("token", data.token);
						setStore({ token: data.token });
						return true;
					})
					.catch(error => console.error("There has been an error login in!!", error));
			},
			precover: async myEmail => {
				const url = process.env.BACKEND_URL + "/api/recovery";

				await fetch(url, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: myEmail
					})
				})
					.then(resp => {
						if (resp.status !== 200) return resp.json();
						else return resp.json();
					})
					.then(data => {
						console.log("This came from the backend ", data);
						return true;
					})
					.catch(error => console.error("There has been an error somewhere", error));
			},
			handleRegister: async (name, lastname, cedula, phone, email, password) => {
				await fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					body: JSON.stringify({
						name: name,
						lastname: lastname,
						cedula: cedula,
						phone: phone,
						email: email,
						password: password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => {
						if (res.status != 200) {
							setStore({ registerSuccess: false });
							setStore({ registerProblem: true });
						} else {
							setStore({ registerSuccess: true });
							setStore({ registerProblem: false });

							return res.json();
						}
					})
					.then(data => {
						console.log("data: ", data);
					})
					.catch(err => console.error("Error ", err));
			},
			handlePublication: async (nombre, image, categoria, descripcion, provincia, abierto, cerrado, min, max) => {
				console.log("back", nombre, image, categoria, descripcion, provincia, abierto, cerrado, min, max);
				const mytoken = sessionStorage.getItem("token");
				await fetch(process.env.BACKEND_URL + "/api/publicar", {
					method: "POST",
					body: JSON.stringify({
						image: image,
						nombre: nombre,
						categoria: categoria,
						descripcion: descripcion,
						provincia: provincia,
						horario: abierto + "- " + cerrado,
						rango: "¢" + min + "-" + "¢" + max
					}),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + mytoken
					}
				})
					.then(res => {
						if (res.status != 200) {
							setStore({ publicarSuccess: false });
						} else {
							setStore({ publicarSuccess: true });

							return res.json();
						}
					})
					.then(data => {
						console.log("data: ", data);
					})
					.catch(err => (console.error("Error ", err), setStore()));
			},
			getServices: async () => {
				await fetch(process.env.BACKEND_URL + "/api/servicios")
					.then(res => res.json())
					.then(data => setStore({ servicios: data }))
					.catch(err => console.error(err));
			},
			getUsers: async () => {
				await fetch(process.env.BACKEND_URL + "/api/users")
					.then(res => res.json())
					.then(data => setStore({ usuarios: data }))
					.catch(err => console.error(err));
			},
			handleGetUserProfile: async () => {
				const mytoken = sessionStorage.getItem("token");
				await fetch(process.env.BACKEND_URL + "/api/perfil", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + mytoken
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("This my data", data);
						setStore({ perfilUsuario: data });
					})
					.catch(err => console.error(err));
			},
			handleGetUserEditProfile: async () => {
				const mytoken = sessionStorage.getItem("token");
				await fetch(process.env.BACKEND_URL + "/api/perfiledicion", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + mytoken
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log("This my data", data);
						setStore({ perfilUsuario: data });
					})
					.catch(err => console.error(err));
			},
			deleteAccount: async () => {
				const mytoken = sessionStorage.getItem("token");
				await fetch(process.env.BACKEND_URL + "/api/perfiledicion", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + mytoken
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
					})
					.catch(err => console.error(err));
			},
			updateUserProfile: async (name, lastname, cedula, phone, email, password) => {
				const mytoken = sessionStorage.getItem("token");
				await fetch(process.env.BACKEND_URL + "/api/perfiledicion", {
					method: "PUT",
					body: JSON.stringify({
						name: name,
						lastname: lastname,
						cedula: cedula,
						phone: phone,
						email: email,
						password: password
					}),
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + mytoken
					}
				})
					.then(res => resp.json())
					.then(data => console.log(data))
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
