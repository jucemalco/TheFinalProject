const getState = ({ getStore, setStore, getActions }) => {

    return {
        store: {
            user: [],
            users: [],
            favorito: [],
            lista_favorito: [],
            match: [],
            products: null,
            product: {
                title: "",
                editorial: "",
                autor: "",
                review: ""
            },
        },
        actions: {
            getProducts: (e) => {
                fetch("http://localhost:5000/products")
                    .then(res => res.json())
                    .then(state => setStore({ products: state }))
                    .catch(error => console.log(error))
            },
            // getProduct: (id) => {
            //     fetch("http://localhost:5000/product" + id)
            //     .then(res => res.json())
            //     .then(state => setStore({product: state}))
            //     .catch(error => console.log(error))
            // },
            onChange: (e) => {
                const { product } = getStore()
                setStore({ product: { ...product, [e.target.name]: e.target.value } })
            },
            saveProduct: (state, e) => {
                //e.preventDefault()
                console.log("flux", e)
                const { product } = getStore()
                fetch("http://localhost:5000/product", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(state)
                }).then(res => res.json())
                    .then(state => console.log(state))
                setStore({
                    state: {
                        title: "",
                        editorial: "",
                        autor: ""
                    }
                })
            },
            addFav: favorito => {
                const state = getState();
                if (state.lista_favorito.includes(favorito)) {
                    return console.log("Ya existe este libro como tu favorito")
                }
                setStore({ lista_favorito: [...state.lista_favorito, favorito] })
                return console.log(state.lista_favorito)
            },
            deleteFav: (index) => {
                const store = getStore()
                store.lista_favorito.splice(index, 1)
                setStore({ lista_favorito: store.lista_favorito })
            },


            //LOGIN USUARIOS
            login: (state, evento, navegate) => {
                console.log("flux, state")
                fetch("http://localhost:5000/login", {
                    method: 'POST',
                    body: JSON.stringify(state),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                    .then(response => {
                        console.log('Success:', response)
                        navegate('/miperfil/userprofile')
                    })
                    .catch(error => console.error('Error:', error));
            },


            //PARA EL REGISTRO DE USUARIOS //
            createUser: (state, evento) => {
                //evento.preventDefault()
                console.log("flux", state)
                fetch("http://localhost:5000/registro", {
                    method: 'POST', // or 'PUT'
                    body: JSON.stringify(state),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => console.log('Success:', response));
            },

            //PARA ENVIAR AL ENDPOINT LA SOLICITUD DE LOS LIBROS CON ID DE USUARIO Y CAMBIO DE ESTADO A PENDING
            bookmatch: (state, evento) => {
                //evento.preventDefault()
                console.log("flux", state)
                fetch("http://localhost:5000/bookmatch", {
                    method: 'POST', // or 'PUT'
                    body: JSON.stringify(state),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => console.log('Success:', response));
            },



            /*para cuando se inicia sesión LOG IN*/
            // getUser: id => {
            //     fetch("" + id)
            //         .then(response => response.json())
            //         .then((result) => {
            //                 setStore({user: FALTA LA RUTA DE LA BASE DE DATOS }
            //         })
            //         .catch(error => console.log("Error", error));
            // },
            // /*para cuando se hace la consulta de registro si el usurio existe o no (registrado) SIGN IN*/


        },
    };
};

export default getState;