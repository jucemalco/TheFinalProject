const getState = ({ getStore, setStore, getActions }) => {
  return {
    store: {
      user: {},
      users: [],
      favorito: [],
      lista_favorito: [],
      match: [],
      products: null,
      product: {
        title: "",
        editorial: "",
        autor: "",
        review: "",
      },
    },
    actions: {
      getProducts: () => {
        fetch("http://localhost:5000/products")
          .then((res) => res.json())
          .then((state) => setStore({ products: state }))
          .catch((error) => console.log(error));
      },
      // getProduct: (id) => {
      //     fetch("http://localhost:5000/product" + id)
      //     .then(res => res.json())
      //     .then(state => setStore({product: state}))
      //     .catch(error => console.log(error))
      // },
      onChange: (e) => {
        const { product } = getStore();
        setStore({ product: { ...product, [e.target.name]: e.target.value } });
      },
      saveProduct: (state, e) => {
        //e.preventDefault()
        console.log("flux", e);
        const { product } = getStore();
        fetch("http://localhost:5000/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        })
          .then((res) => res.json())
          .then((state) => console.log(state));
        setStore({
          state: {
            title: "title",
            editorial: "editorial",
            autor: "autor",
            review: "review",
            user_id: "user_id",
          },
        });
      },
      addFav: (favorito) => {
        const state = getState();
        if (state.lista_favorito.includes(favorito)) {
          return console.log("Ya existe este libro como tu favorito");
        }
        setStore({ lista_favorito: [...state.lista_favorito, favorito] });
        return console.log(state.lista_favorito);
      },
      deleteFav: (index) => {
        const store = getStore();
        store.lista_favorito.splice(index, 1);
        setStore({ lista_favorito: store.lista_favorito });
      },

      googleAuth: async (state) => {
        try {
          const res = await fetch("http://localhost:5000/auth/google", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: state.tokenId }),
          });
          const data = await res.json();
          setStore({ user: data });
          sessionStorage.setItem("token", data.access_token);
        } catch (error) {
          console.log("error", error);
        }
      },

      //LOGIN USUARIOS
      login: (state, evento, navegate) => {
        console.log("flux, state");
        fetch("http://localhost:5000/login", {
          method: "POST",
          body: JSON.stringify(state),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((response) => {
            if (response.success) {
              setStore({ user: response });
              navegate("/userprofile");
              sessionStorage.setItem("token", response.access_token);
            } else {
              navegate("/login/newaccount");
            }
          })
          .catch((error) => console.error("Error:", error));
      },

      //PARA EL REGISTRO DE USUARIOS //
      createUser: (state, navegate) => {
        //evento.preventDefault()
        console.log("flux", state);
        fetch("http://localhost:5000/registro", {
          method: "POST", // or 'PUT'
          body: JSON.stringify(state), // data can be `string` or {object}!
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((response) => {
            if (response.success) {
              navegate("/login");
            }
          })
          .catch((error) => console.error("Error:", error));
      },

      editData: (state, evento) => {
        //evento.preventDefault()
        console.log("flux", state);
        fetch("http://localhost:5000/editdata", {
          method: "PUT",
          body: JSON.stringify(state),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((response) => console.log("Success:", response))
          .catch((error) => console.error("Error:", error));
      },

      //FETCH PARA CONSULTAR LOS MATCH PENDIENTES
      match: (state, evento, navegate) => {
        console.log("flux, state");
        fetch("http://localhost:5000/pendingmatches", {
          method: "POST",
          body: JSON.stringify(state),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((response) => {
            console.log("Success:", response);
            setStore({ user: response });
          })
          .catch((error) => console.error("Error:", error));
      },
      //FECTH PARA CONSULTAR LOS MATCH ACEPTADOS
      acceptedmatches: () => {},
      //FETCH SOLOS MIS LIBROS PUBLICADOS
      mybookspublished: () => {},
      //TODOS LOS LIBROS PUBLICADOS MENOS LOS MIOS
      allbookspublished: () => {},
      //FETCH PARA CAMBIO DE ESTADO A ACEPTADO
      acceptedrequest: () => {},
      //FETCH PARA CAMBIO DE ESTADO A RECHAZADO
      rejectrequest: () => {},

      match: () => {},
    },
  };
};

export default getState;
