const localApiUrl = 'http://localhost:3000/status/500/delay/2'

// try {
// 	let quoz = 5 / x
// } catch (error) {
// 	console.log('dal catch')
// }
// console.log('ciao')

// const fetchPromise = fetch(localApiUrl)
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log("la richiesta e' andata male"))
// console.log('vengo dopo fetch')

// il nostro sogno

// tecnica del type="module"
// const response = await fetch(localApiUrl)
// const data = await response.json()
// console.log(data)

// tecnica della funzione asincrona
fetcher()
async function fetcher() {
	try {
		const response = await fetch(localApiUrl, {
			header: {
				Authentication: 'chiave'
			}
		})
		// se il blocco dell'if ha una sola istruzione si possono omettere le parentesi graffe
		if (!response.ok) throw new Error('Status code non nel range dei 200')
		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.log(error.message)
	}
}
