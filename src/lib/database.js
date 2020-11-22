export function getProductsFromDatabase(){ 
    return new Promise ((resolve) =>{
        setTimeout(() => {
            console.log(products);
            resolve(products);
        }, 1000)
    })
}

export function getSingleProductFromDatabase(id){ 
    return new Promise ((resolve) =>{
        setTimeout(() => {
            var singleProduct = products.filter(element => element.id==id);
            resolve(singleProduct[0]);
        }, 1000)
    })
}



const products=[ 
{"id":1,"name":"Wine - Trimbach Pinot Blanc",   "price":747,"desc":"este es un producto bueno barato y lindo que nada tiene que envidiarle a los otros","pres":"1L","stock":68},
{"id":2,"name":"Island Oasis - Magarita Mix",   "price":117,"desc":"este es un producto bueno barato y lindo que nada tiene que envidiarle a los otros","pres":"1L","stock":100},
{"id":3,"name":"Island Oasis - Mango Daiquiri", "price":679,"desc":"este es un producto bueno barato y lindo que nada tiene que envidiarle a los otros","pres":"1L","stock":44},
{"id":4,"name":"Currants",                      "price":774,"desc":"este es un producto bueno barato y lindo que nada tiene que envidiarle a los otros","pres":"1L","stock":32},
{"id":5,"name":"Beef - Top Sirloin - Aaa",      "price":722,"desc":"este es un producto bueno barato y lindo que nada tiene que envidiarle a los otros","pres":"1L","stock":30},
{"id":6,"name":"Cheese - Brie,danish",          "price":706,"desc":"este es un producto bueno barato y lindo que nada tiene que envidiarle a los otros","pres":"1L","stock":61},
{"id":7,"name":"Kaffir Lime Leaves",            "price":496,"desc":"este es un producto bueno barato y lindo que nada tiene que envidiarle a los otros","pres":"1L","stock":24},
{"id":8,"name":"Kale - Red",                    "price":568,"desc":"este es un producto bueno barato y lindo que nada tiene que envidiarle a los otros","pres":"1L","stock":22},
{"id":9,"name":"Coffee - Egg Nog Capuccino",    "price":502,"desc":"este es un producto bueno barato y lindo que nada tiene que envidiarle a los otros","pres":"1L","stock":82},
{"id":10, "name":"Eggplant - Asian",            "price":660,"desc":"este es un producto bueno barato y lindo que nada tiene que envidiarle a los otros","pres":"1L","stock":3}]


// module.exports = getProductsFromDatabase;
// module.exports = getSingleProductFromDatabase;