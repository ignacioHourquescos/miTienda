export function getProductsFromDatabase(){ 
    return new Promise ((resolve) =>{
        setTimeout(() => {
            // console.log(products);
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
{"id":1,"name":"Wine - Trimbach Pinot Blanc",   "oferta":"40%", "img":"https://http2.mlstatic.com/D_NQ_NP_2X_727347-MLA42833205006_072020-F.webp","price":747,"desc":"este es un producto bueno barato ","pres":"1L","stock":68},
{"id":2,"name":"Island Oasis - Magarita Mix",   "oferta":"40%", "img":"https://http2.mlstatic.com/D_NQ_NP_2X_966403-MLA43837417200_102020-F.webp","price":117,"desc":"este es un producto bueno barato ","pres":"1L","stock":100},
{"id":3,"name":"Island Oasis - Mango Daiquiri", "oferta":"40%", "img":"https://www.champagne-terroir.fr/519-large_default/berat-schenk-champagne-tradition.jpg","price":679,"desc":"este es un producto bueno barato ","pres":"1L","stock":44},
{"id":4,"name":"Currants",                      "oferta":"40%", "img":"https://http2.mlstatic.com/D_NQ_NP_2X_969126-MLA31132509178_062019-F.webp","price":774,"desc":"este es un producto bueno barato ","pres":"1L","stock":32},
{"id":5,"name":"Beef - Top Sirloin - Aaa",      "oferta":"40%", "img":"https://http2.mlstatic.com/D_NQ_NP_2X_727347-MLA42833205006_072020-F.webp","price":722,"desc":"este es un producto bueno barato ","pres":"1L","stock":30},
{"id":6,"name":"Cheese - Brie,danish",          "oferta":"40%", "img":"https://http2.mlstatic.com/D_NQ_NP_2X_727347-MLA42833205006_072020-F.webp","price":706,"desc":"este es un producto bueno barato ","pres":"1L","stock":61},
{"id":7,"name":"Kaffir Lime Leaves",            "oferta":"40%", "img":"https://http2.mlstatic.com/D_NQ_NP_2X_727347-MLA42833205006_072020-F.webp","price":496,"desc":"este es un producto bueno barato ","pres":"1L","stock":24},
{"id":8,"name":"Kale - Red",                    "oferta":"40%", "img":"https://http2.mlstatic.com/D_NQ_NP_2X_727347-MLA42833205006_072020-F.webp","price":568,"desc":"este es un producto bueno barato ","pres":"1L","stock":22},
{"id":9,"name":"Coffee - Egg Nog Capuccino",    "oferta":"40%", "img":"https://http2.mlstatic.com/D_NQ_NP_2X_727347-MLA42833205006_072020-F.webp","price":502,"desc":"este es un producto bueno barato ","pres":"1L","stock":82},
{"id":10, "name":"Eggplant - Asian",            "oferta":"40%", "img":"https://http2.mlstatic.com/D_NQ_NP_2X_727347-MLA42833205006_072020-F.webp","price":660,"desc":"este es un producto bueno barato ","pres":"1L","stock":3}]


// module.exports = getProductsFromDatabase;
// module.exports = getSingleProductFromDatabase;