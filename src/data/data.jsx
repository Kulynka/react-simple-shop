import Mishok from './../img/mishok.jpg';

const Jobs = [
    {   
        id: 1,
        productImage: Mishok,
        productName: "Суміш для приклейки пінопласту ADEXBUD",
        available: true,
        productCode: 5644,
        amountComments: 1,
        price: '170 грн',
        discount: null
    },
    {
        id: 2,
        productImage: Mishok,
        productName: "Суміш для приклейки пінопласту ADEXBUD2",
        available: false,
        productCode: 5645,
        amountComments: 2,
        price: '150 грн',
        discount: 149.90
    },
    {
        id: 3,
        productImage: Mishok,
        productName: "Суміш для приклейки пінопласту ADEXBUD3",
        available: false,
        productCode: 5646,
        amountComments: 5,
        price: '190 грн',
        discount: null
    }
]


export default Jobs;
