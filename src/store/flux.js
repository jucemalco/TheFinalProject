const getState = ({ getstore, setStore, getActions }) => {
    return {
        store: {
            products: [
                {
                    title:"El señor de los Anillos",
                    editorial:"Minotauro",
                    autor:"J. R. R. Tolkien"
                },
                {
                    title:"El señor de los Anillos",
                    editorial:"Minotauro",
                    autor:"J. R. R. Tolkien"
                },
                {
                    title:"El señor de los Anillos",
                    editorial:"Minotauro",
                    autor:"J. R. R. Tolkien"
                },
                {
                    title:"El señor de los Anillos",
                    editorial:"Minotauro",
                    autor:"J. R. R. Tolkien"
                },
                {
                    title:"El señor de los Anillos",
                    editorial:"Minotauro",
                    autor:"J. R. R. Tolkien"
                },
                {
                    title:"El señor de los Anillos",
                    editorial:"Minotauro",
                    autor:"J. R. R. Tolkien"
                },
            ]
        },
        actions: {
            // addFav: favorite => {
			// 	const store = getStore();
			// 	if (store.lista_favorito.includes(favorite)){
			// 		return console.log("Ya existe este favorito")
			// 	}
			// 	setStore({ lista_favorito: [...store.lista_favorito, favorite] })
			// 	return console.log(store.lista_favorito)
			// },
        }
    };
};

export default getState;