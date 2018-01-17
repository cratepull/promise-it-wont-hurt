'use strict';

require('es6-promise');

var promise = Promise.reject(new Error('SECRET VALUE'));

promise.catch(function (err) {
	console.error('THERE IS AN ERROR!!!');
	console.error(err.message);
});
