const products = [
    {id: '1',
    name: 'Torta con crema',
    price: 5000,
    category: 'tortas',
    img: 'https://content-cocina.lecturas.com/medio/2018/07/19/paso-a-paso-para-realizar-pastel-de-crema-de-vainilla-con-flores-resultado-final_42424c31_800x800.jpg',
    stock: 20,
    description: 'Torta en Crema x kg'
},
{id: '2',
name: 'Torta forrada',
price: 9000,
category: 'tortas',
img: 'https://i.pinimg.com/564x/29/bf/59/29bf595f010ee2417d2611787b6edcef.jpg',
stock: 20,
description: 'Torta en Forrada x kg'
},
{id: '3',
name: 'Alfajores de maicena',
price: 4000,
category: 'alfajores',
img: 'https://azucarledesma.com/wp-content/uploads/2022/05/20231108-AlfajoresMaicena.jpg',
stock: 20,
description: 'Alfajores x docena'
},


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 500);
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout (()=>{
            resolve (products.find(prod => prod.id === productId))
        }, 500)
    })
}