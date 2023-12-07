/*
// callback / event
addEventListener(event, callback)
setInterval(callback, interval)
setTimeout(callback, timeout)

// promises (.then(), async/await)
fatch().then(callback).then(callback).catch(errorCallback)
*/

/* timeout di 5 secondi senza operazione bloccante */
// console.log('sono la prima istruzione')
// setTimeout(() => {
// 	console.log('sto nella callback')
// }, 5000)
// console.log("sono l'utlima istruzione")
/* OUTPUT
sono la prima istruzione
sono l'utlima istruzione
(5 sec)
sto nella callback
*/

// timeout di 0 secondi senza operazione bloccante
// console.log('sono la prima istruzione')
// setTimeout(() => {
// 	console.log('sto nella callback')
// }, 0)
// console.log("sono l'utlima istruzione")
/* OUTPUT
sono la prima istruzione
sono l'utlima istruzione
sto nella callback
*/

/* timeout di 5 secondi con operazione che blocca 2 secondi */
// console.log('sono la prima istruzione')
// setTimeout(() => {
// 	console.log('sto nella callback')
// }, 5000)
// blockEventLoop(2)
// console.log("sono l'utlima istruzione")
/* OUTPUT
sono la prima istruzione
(2 sec)
Hai bloccato l'event loop per 2 secondi
sono l'utlima istruzione
(3 sec)
sto nella callback
*/

/* timeout di 5 secondi con operazione che blocca 10 secondi */
// console.log('sono la prima istruzione')
// setTimeout(() => {
// 	console.log('sto nella callback')
// }, 5000)
// blockEventLoop(10)
// console.log("sono l'utlima istruzione")
/* OUTPUT
sono la prima istruzione
(10 sec)
Hai bloccato l'event loop per 10 secondi
sono l'utlima istruzione
sto nella callback
*/

function blockEventLoop(seconds) {
	const startTimestamp = Date.now()
	const endTimestamp = Date.now() + seconds * 1000
	while (endTimestamp - Date.now() > 0) {}
	const blockingTime = (Date.now() - startTimestamp) / 1000
	console.log(`Hai bloccato l'event loop per ${blockingTime} secondi`)
}
