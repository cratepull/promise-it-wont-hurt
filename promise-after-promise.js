var firstPromise = first();

var secondPromise = firstPromise.then(function (val) {
return second(val);
});

secondPromise.then(console.log);

/**  
first().then(function(fulfill, reject){	 
	return fulfill
}).then(function(query){
	return second(query)
}).then(function(result){
	console.log(result)
})	
 */

