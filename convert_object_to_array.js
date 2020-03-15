function toArray (obj){
	var newArr = [];
	for (let [key, value] of Object.entries(obj)) {
		newArr.push([key, value]);
}
return newArr;
}