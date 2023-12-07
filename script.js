const eleOutput = document.querySelector('#output')

const address = 'https://jsonplaceholder.typicode.com/todos/5'
// const fetchResult = fetch(address) // fetchResult contiene la promise non i dati richiesti
// console.log(fetchResult)

const userData = { name: 'Pinco', age: 33 }
const fetchOptions = {
	method: 'POST',
	body: JSON.stringify(userData),
	headers: {
		Authentication: 'la nostra chiave',
	},
}

// fetch(address, fetchOptions)
fetch(address)
	.then((response) => {
		if (!response.ok) throw new Error('Non ci troviamo nel range dei 200')
		return response.json()
	})
	.then((data) => {
		console.log(data)
		eleOutput.innerHTML = data.title
	})
	.catch((error) => (eleOutput.innerHTML = error.message))
