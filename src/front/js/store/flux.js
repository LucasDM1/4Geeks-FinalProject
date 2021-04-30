const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null
		},
		actions: {
			login: async (myEmail, myPassword) => {
				console.log("Email: ", myEmail);
				console.log("PWS: ", myPassword);
				const url = process.env.BACKEND_URL + "/api/login";
				console.log("URL: ", url);
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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
