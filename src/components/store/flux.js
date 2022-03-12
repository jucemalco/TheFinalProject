const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            user: [],
            users: [],
            favorite: [],
            favorites: [],
            match: [],
            book: [],
            books: [],
            product: [],
            products: [],
            favorite_list: [],
        },
        actions: {
                /*INICIADA LA SESIÓN ACCION DE GUARDAR Y ELIMINAR FAVORITOS*/
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
    }

 