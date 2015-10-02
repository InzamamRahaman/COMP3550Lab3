/*
 * Consider the case of a quadratic equation. Recall that every quadratic equation can be
 * expressed in the form ax^2 + bx + c. Also recall from differential calculus that the x coordinate of stationary point
 * of a quadratic where a =/= 0 is the solution to the equation 0 = 2ax + b. Also recall that the stationary point
 * is a Miniumum point if a > 0 and a Maximum if a < 0. Using this information and the starter code, compute and
 * appropriately display the stationary point as a (x, y) coordinate and indicate whether the stationary point
 * is a minimum or a maximum.
 * Given the above method, if a == 0, then we cannot perform the above computation. Using a bootstrap alert, indicate
 * this to the user if they set a = 0
 */

(function() {

	function processInput() {

		// retrieve the data from the form
		var a = parseFloat($('#coeffa').val());
		var b = parseFloat($('#coeffb').val());
		var c = parseFloat($('#coeffc').val());

		if(a == 0) {
			console.log('handling invlad');
			handleInvalidInput();
		} else {
			// process the retrieved data
			processQuadratic(a, b, c);
		}
	}

	function handleInvalidInput() {
		$('#alertbox').removeClass('hidden');
	}

	function processQuadratic(a, b, c) {
		$('#alertbox').addClass('hidden');
		var stationary = solveForStationary(a, b, c);
		var maxOrMin = isMaxOrMin(a, b, c);
		writeOutput(stationary, maxOrMin);
	}

	function writeOutput(stationary, maxOrMin) {
		var coordsStr = stationary.x + ', ' + stationary.y
		$('#coords').val(coordsStr);
		$('#maxormin').val(maxOrMin);
	}

	function solveForStationary(a, b, c) {
		console.log(a,b,c);
		var stationaryX = -1 * b / (2 * a);
		var stationaryY = a * stationaryX * stationaryX +
			b * stationaryX + c;
		var coords = {
			x : stationaryX, 
			y : stationaryY
		};
		return coords;
	}

	function isMaxOrMin(a, b, c) {
		if(a > 0) {
			return 'Min';
		}
		return 'Max';
	}

	$('#quadratic').submit(function(event) {
		console.log('attached handler');
		event.preventDefault();
		processInput();
	});

})();