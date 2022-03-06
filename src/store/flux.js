const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            products: null,
            product: {
                    title: "",
                    editorial:"",
                    autor:""
                },
            },
        actions: {
            getProducts: () => {
                    fetch("http://localhost:3000/products")
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
                fetch("http://localhost:3000/product", {
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
        }
    };
};

export default getState;