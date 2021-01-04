
import { getFirestore } from '../firebase'


//FETCHES ALL PRODUCTS
export function getProductsFromDatabase() {

	return new Promise((resolve, reject) => {

		const products = getFirestore().collection('productos')
		products.get().then((query) => {

			if (query.size === 0) reject('no hay registros')
			const data = query.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
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

			const data = query.data()
			if (query.size === 0 || data === undefined) reject('no hay registros')
			data.id = id
			resolve(data)
		})

	})

}


//FETCHES PRODUCTS BY CATEGORY
export function getProductsByCategory(category) {

	return new Promise((resolve, reject) => {

		const products = getFirestore().collection('productos').where("category", "==", category);
		products.get().then((query) => {

			if (query.size === 0) reject('no hay registros')
			const data = query.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			resolve(data)
		})
	})
}

//FETCHES ALL EXISTING CATEGORIES
export function getCategories() {

	return new Promise((resolve, reject) => {

		const products = getFirestore().collection('productos');
		products.get().then((query) => {

			if (query.size === 0) reject('no hay registros')
			const data = query.docs.map((doc) => (doc.data().category))
			resolve(EliminateDuplicates(data))
		})
	})
}

//FETCHES ORDER BY ID
export function getOrderById(id) {

	return new Promise((resolve, reject) => {

		const products = getFirestore().collection('Purchases')
		const getSingleOrder = products.doc(id);
		getSingleOrder.get().then((query) => {

			const data = query.data()
			if (query.size === 0 || typeof data === 'undefined') reject('no hay registros')
			console.log(data);
			resolve(data)
		})
	})
}


//AUXILIAR FUNCTIONS
const EliminateDuplicates = (names) => names.filter((v, i) => names.indexOf(v) === i)


