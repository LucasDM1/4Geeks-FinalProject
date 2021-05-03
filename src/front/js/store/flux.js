const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			registerSuccess: false,
			registerProblem: false,
			registerError: null
		},
		actions: {
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
					.catch(err => (console.error("Error ", err), setStore()));
			}
		}
	};
};

export default getState;
