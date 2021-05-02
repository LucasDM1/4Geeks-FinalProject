const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			registerProblem: null
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
							setStore({ registerProblem: null });
						} else {
							setStore({ registerProblem: "success" });
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
