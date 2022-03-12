const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            user: [],
            users: [],
            favorite: [],
            favorites: [],
            match: [],
            product: [],
            products: [],
            favorite_list: [],
            products: null,
            product: {
                    title: "",
                    editorial:"",
                    autor:""
                },
            },
        actions: {
            getProducts: () => {
                    fetch("http://localhost:5000/products")
                    .then(res => res.json())
                    .then(data => setStore({products: data}))
                    .catch(error => console.log(error))
            },
            handleProductChange: (e) => {
                 const { product } = getStore()
                 setStore ({ product: {...product, [e.target.name]: e.target.value}})
            },
            saveProduct: (e) => {
                e.preventDefault()
                const {product} = getStore()
                fetch("http://localhost:5000/product", {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(product)
                }).then(res => res.json())
                .then(data => console.log(data))
                setStore({product: {
                    title: "",
                    editorial:"",
                    autor:""
                }})
            }
            addfav: favorite => {
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
            getUser: id => {
                fetch("" + id)
                    .then(response => response.json())
                    .then((result) => {
                            setStore({user: FALTA LA RUTA DE LA BASE DE DATOS });

                    })
                    .catch(error => console.log("Error", error));
            },
            /*para cuando se hace la consulta de registro si el usurio existe o no (registrado) SIGN IN*/
            
            getUsers: () => {
                fetch("http://localhost:5000/")
                    .then(response => response.json())
                    .then(data => setStore({users: RUTA A LA BASE DE DATOS}));
             },
            /*CONSULTA A LA BASE DE DATOS DESDE "BUSQUEDA"*/
             getBooks: ()  => {
                 fetch("http://localhost:5000/")
                 .then (response => response.json())
                 .then ((data)) =>
                        setStore({ planet: ruta en base de datos}));

             }
        }
    };
};

export default getState;