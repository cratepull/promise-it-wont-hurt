function all(primiseOne, promiseTwo){

	return new Promise(function (fulfill, reject) {


		var counter = 0;
		var arrayWithValues = []


		primiseOne.then(function(result){
			counter++
			arrayWithValues[0] = result

			if (counter  == 2) 
				fulfill(arrayWithValues)

		})

		promiseTwo.then(function(result){
			counter++
			arrayWithValues[1] = result

			if (counter  == 2)
				fulfill(arrayWithValues)

		})
	})
}


all(getPromise1(), getPromise2()).then(function(resp){
	console.log(resp)
})