`use strict`

function factorial(num) {
	if (typeof num !== `number` || !Number.isInteger (num)){
		return `Not a number`
	} else if (num < 1) {
		return 1
	} else {
		let result =  num * factorial (num - 1);
		console.log(result);
		
		return result
	}

};
