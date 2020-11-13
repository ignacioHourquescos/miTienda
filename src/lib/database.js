export default function getProductsFromDatabase(){ 
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(product);
        }, 2000)
    })
}

const product=[ {"id":1,"name":"Wine - Trimbach Pinot Blanc","price":747,"stock":68},
                {"id":2,"name":"Island Oasis - Magarita Mix","price":117,"stock":100},
                {"id":3,"name":"Island Oasis - Mango Daiquiri","price":679,"stock":44},
                {"id":4,"name":"Currants","price":774,"stock":32},
                {"id":5,"name":"Beef - Top Sirloin - Aaa","price":722,"stock":30},
                {"id":6,"name":"Cheese - Brie,danish","price":706,"stock":61},
                {"id":7,"name":"Kaffir Lime Leaves","price":496,"stock":24},
                {"id":8,"name":"Kale - Red","price":568,"stock":22},
                {"id":9,"name":"Coffee - Egg Nog Capuccino","price":502,"stock":82},
                {"id":10, "name":"Eggplant - Asian","price":660,"stock":3}]
