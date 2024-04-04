const products = [
    {id: '1',
    name: 'Torta en crema',
    price: 7000,
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
description: 'Torta Forrada x kg'
},
{id: '3',
name: 'Alfajores de maizena',
price: 4000,
category: 'alfajores',
img: 'https://azucarledesma.com/wp-content/uploads/2022/05/20231108-AlfajoresMaicena.jpg',
stock: 20,
description: 'Alfajores de maizena x docena'
},
{id: '4',
name: 'Tarta Cabsha',
price: 5000,
category: 'tartas',
img: 'https://cocinerosargentinos.com/content/recipes/500x500/recipes.16856.jpg',
stock: 20,
description: 'Tarta cabsha de 22 cm de diametro'
},
{id: '5',
name: 'Box-1',
price: 5000,
category: 'box',
img: 'https://d22fxaf9t8d39k.cloudfront.net/d0e2ff42cd836b508ac4fa5174216e7d2422ba0bccc0263e8cd3a6ca82e59abd7046.jpeg',
stock: 20,
description: 'Box personalizados'
},
{id: '6',
name: 'Tarta de ricota',
price: 4000,
category: 'tartas',
img: 'https://recetas.deagapornis.com/wp-content/uploads/2020/06/receta-tarta-de-ricota-390x200.png',
stock: 20,
description: 'Tarta de ricota de 22 cm de diametro'
},
{id: '7',
name: 'Alfajores de chocolate',
price: 3000,
category: 'alfajores',
img: 'https://d3340tyzmtlo4u.cloudfront.net/users/864/images/detailed/9/Havanna_Alfajores_de_Chocolate,_55_g__12_Alfajores__2.png',
stock: 20,
description: 'Alfajores x media docena'
},
{id: '8',
name: 'Tarta de frutas',
price: 5500,
category: 'tartas',
img: 'https://gourmetier.com/wp-content/uploads/2022/06/Fraisier_03-800x1195.jpg.webp',
stock: 20,
description: 'Tarta de frutas de 22 cm de diametro'
},
{id: '9',
name: 'Box-2',
price: 7000,
category: 'box',
img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1_D4l4653Lx8-YNPW2ywXx3yqghKAEHhVg&usqp=CAU',
stock: 20,
description: 'Box personalizados'
},

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 1000);
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout (()=>{
            resolve (products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout (()=>{
            resolve (products.find(prod => prod.id === itemId))
        }, 1000)
    })
}

