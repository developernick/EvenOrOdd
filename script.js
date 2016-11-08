// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function even_or_odd(number) {
//
// }

function even_or_odd(number) {
	var x = number % 2;
  if (x === 0) {
		return "Even";
	} else {
		return "Odd";
	};
}
