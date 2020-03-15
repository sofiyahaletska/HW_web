function avgWordLengthCalc (str) {
	var flag_end_of_word = false;
  var total_length = 0;
  var amount_of_words = 0;
    for (var i = 0; i < str.length; i++) {
    if("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz".indexOf(str[i]) > -1){
		total_length ++;
		if(flag_end_of_word == true){
			amount_of_words ++;
			flag_end_of_word = false;
		}
	}
	else{
		flag_end_of_word = true;
	}	
}
amount_of_words ++;
  return total_length/amount_of_words;  
}
