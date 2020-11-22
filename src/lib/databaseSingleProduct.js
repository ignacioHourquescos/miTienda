export default function getSingleProductFromDatabase(){ 
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(product);
        }, 2000)
    })
}

const product=
{"id":1,"name":"Wine - Trimbach Pinot Blanc",   "price":747,"desc":"este es un producto bueno barato y lindo que nada tiene que envidiarle a los otros","pres":"1L","stock":68}
