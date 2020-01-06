function findLeapYear() {
	var x = +document.getElementById("str").value;
	var y = +document.getElementById("end").value;
	var yearRange = [];

	for (var i = x; i <= y; i++) {
		yearRange.push(i);
	}

	var leapYears = [];
	yearRange.forEach(function(item, index) {
		if (item % 4 === 0) {
			leapYears.push(item);
		}
	});

	console.log(leapYears + 1);
}
