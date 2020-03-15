function maxTotal (arr, amount_of_summing_numbers = 5) {
	var sum = 0;
  arr.sort(function(a, b){return a - b});
  for (var i = 0; i < amount_of_summing_numbers; i++) {
		sum += arr.pop();
}
  return sum;  
}