function parsePromised(data){
	return new Promise(function (fulfill, reject) {
		try {
	      fulfill(JSON.parse(data))
	    } catch (e) {
	      reject(e)
	    }
	})
}

function onReject(error) {
	console.log(error.message);
}


parsePromised(process.argv[2])
.then(null, onReject);

