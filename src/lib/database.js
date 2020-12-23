
import {getFirestore} from '../firebase'




// Fetches all Products
export function getProductsFromDatabase() {
    return new Promise((resolve, reject) => {
      const products = getFirestore().collection('productos')
      products.get().then((query) => {
        if (query.size === 0) reject('no hay registros')
        const data = query.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
        resolve(data)
      })
    })
  }


  
//FETCHES PRODUCTS BY ID
 export function getSingleProductFromDatabase(id) {
  return new Promise((resolve, reject) => {
    const products = getFirestore().collection('productos')
    const getSingleProduct = products.doc(id);
    getSingleProduct.get().then((query) => {
      const data= query.data()
      if (query.size === 0) reject('no hay registros')
      data.id=id
      resolve(data)
    })
  })
}


//FETCHES PRODUCTS BY CATEGORY
export function getProductsByCategory(category){
    return new Promise((resolve, reject) => {
        const products = getFirestore().collection('productos').where("category","==",category);
        products.get().then((query) => {
          if (query.size === 0) reject('no hay registros')
          const data = query.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          resolve(data)
        })
      })
    }

//FETCHES ALL EXISTING CATEGORIES
export function getCategories(){
  return new Promise((resolve, reject) => {
      const products = getFirestore().collection('productos');
      products.get().then((query) => {
        if (query.size === 0) reject('no hay registros')
        const data = query.docs.map((doc) => (doc.data().category))
        console.log(data);
        resolve(data)
      })
    })
  }


