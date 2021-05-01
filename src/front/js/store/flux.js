const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {
			token: null,
			registerProblem: null
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
							alert("There was an error!!");
							return false;
						}
						return resp.json();
					})
					.then(data => {
						console.log("This came from the backend ", data);
						sessionStorage.setItem("token", data.token);
						setStore({ token: data.token });
						return true;
					})
					.catch(error => console.error("There has been an error login in!!", error));
			},
			handleRegister: async (name, lastname, cedula, phone, email, password) => {
				await fetch("https://3001-gold-pike-f5h0w49z.ws-us04.gitpod.io/api/register", {
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
							setStore({ registerProblem: "Some fields are missing" });
						} else {
							setStore({ registerProblem: null });
							return res.json();
						}
					})
					.then(data => {
						console.log("data: ", data);
					})
					.catch(err => console.error("Error ", err));
			}
		}
	};
};

export default getState;
