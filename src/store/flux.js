const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            user: [],
            users: [],
            favorito: [],
			lista_favorito: [],
            match: [],
            favorite_list: [],
            products: null,
            product: {
                    title: "",
                    editorial:"",
                    autor:""
                },
            },
        actions: {
            getProducts: (e) => {
                fetch("http://localhost:5000/products")
                .then(res => res.json())
                .then(state => setStore({products: state}))
                .catch(error => console.log(error))
            },
            onChange: (e) => {
             const { product } = getStore()
             setStore ({ product: {...product, [e.target.name]: e.target.value}})
            },
             saveProduct: (state, e) => {
            //e.preventDefault()
            console.log("flux",e)
            const {product} = getStore()
            fetch("http://localhost:5000/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state)
            }).then(res => res.json())
            .then(state => console.log(state))
            setStore({state: {
                title: "",
                editorial:"",
                autor:""
            }})
            },
            addFav: favorite => {
                const store = getStore();
                if (store.favorite_list.includes(favorite)){
                    return console.log("Ya existe este libro como tu favorito")
                }
                setStore({favorite_list: [...store.favorite_list, favorite] })
                return console.log(store.favorite_list)
            },
            deleteFav: (index) => {
                const store = getStore()
                store.favorite_list.splice(index,1)
                setStore({favorite_list:store.favorite_list})
            },

            /*PARA CONSULTA DE LOGGIN Y REGISTRO DE SIGN IN*/

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
            
            // getUsers: () => {
            //     fetch("http://localhost:5000/")
            //         .then(response => response.json())
            //         .then(data => setStore({users: RUTA A LA BASE DE DATOS}));
            //  },
            // /*CONSULTA A LA BASE DE DATOS DESDE "BUSQUEDA"*/
            // getBooks: ()  => {
            //      fetch("http://localhost:5000/")
            //      .then (response => response.json())
            //      .then ((data)) =>
            //         setStore({ planet: ruta en base de datos}));

            // },
        },
    };
};

export default getState;