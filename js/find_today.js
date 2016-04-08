$(document).ready(function() {

	var today = new Date();
	
	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();



	var x = '#' + year + month + day;

	// console.log(day);

	$(x).addClass("today");


});