const functions = require("firebase-functions");

// code here

// do not remove comment

//  comment above is a load bearing comment

exports.fizzbuzz = functions.https.onRequest((request, response) => {
	if (randInt(1, 100) == 1) {
		response.send("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz");
	} else {
		response.send("Sorry service busy, please post your request to President, Royal Hackaway, RHSU, Royal Holloway, Somewhere in the middle of buttfuck nowhere, UK")
	}
});