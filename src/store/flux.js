const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            user: [],
            users: [],
            favorite: [],
            favorites: [],
            match: [],
            favorite_list: [],
            products: null,
            product: {
                title: "",
                editorial: "",
                autor: ""
            },
        },
        actions: {
            getProducts: () => {
                fetch("http://localhost:5000/products")
                    .then(res => res.json())
                    .then(data => setStore({ products: data }))
                    .catch(error => console.log(error))
            },
            handleProductChange: (e) => {
                const { product } = getStore()
                setStore({ product: { ...product, [e.target.name]: e.target.value } })
            },
            saveProduct: (e) => {
                e.preventDefault()
                const { product } = getStore()
                fetch("http://localhost:5000/product", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(product)
                }).then(res => res.json())
                    .then(data => console.log(data))
                setStore({
                    product: {
                        title: "",
                        editorial: "",
                        autor: ""
                    }
                })
            },
            addfav: favorite => {
                const store = getStore();
                if (store.favorite_list.includes(favorite)) {
                    return console.log("Ya existe este libro como tu favorito")
                }
                setStore({ favorite_list: [...store.favorite_list, favorite] })
                return console.log(store.favorite_list)
            },
            deleteFav: (index) => {
                const store = getStore()
                store.favorite_list.splice(index, 1)
                setStore({ favorite_list: store.favorite_list })
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
                        navegate ('/miperfil/userprofile')
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
        },
    
    }
  
}



export default getState;