



window.onload = function(){

	//A general function to get value
	function getValue(elementID){
	return document.getElementById(elementID).value
	};

	//A general function to convert the value from string to float (i.e. a number)
	function getFloat(elementID){
	return parseFloat(getValue(elementID))
	};

	//Calculation for the section 1
	function basicCalculation(){
		var input1 = getFloat("basic-num-1");
		var input2 = getFloat("basic-num-2");
		var operator = getValue("basic-operation");
		var ans;

		switch(operator){
			case "+":
			ans = input1 + input2;
			break;

			case "-":
			ans = input1 - input2;
			break;

			case "*":
			ans = input1 * input2;
			break;

			case "/":
			ans = input1 / input2;
			break;
		}

		document.getElementById("basic-answer-alert").innerHTML = input1 + operator + input2 + "="+ ans;
	}

	
	//Print answers on section 1
	document.getElementById("basic-calc").addEventListener("click", basicCalculation)



	//Calculation for section 2
	function tripCalculation(){
		var distance = getFloat("trip-distance");
		var mpg = getFloat("trip-mpg");
		var costPerGallon = getFloat("trip-cost");
		var speed = getFloat("trip-speed");
		var ans;

		if(speed <= 60){
			ans = (distance / mpg * costPerGallon).toFixed(2)
		}else {
			ans = (distance / (mpg - (speed - 60) * 2) * costPerGallon).toFixed(2)
		}



		document.getElementById("trip-answer-alert").innerHTML = "The speed is " + speed + ". The cost of the trip is $"+ ans;
	}

	
	//Print answers on section 2
	document.getElementById("trip-calc").addEventListener("click", tripCalculation)


	//Calculation for section 3
	function bmiCalculation(){
		var units = getValue("bmi-units");
		var mass = getFloat("bmi-mass");
		var height = getFloat("bmi-height");
		var ans;

		if(units === "metric"){
			ans = (( mass / (height * height))).toFixed(2)
		}else if (units === "imperial"){
			ans = (( mass  / (height * height) ) * 703).toFixed(2)
		}



		document.getElementById("bmi-answer-alert").innerHTML =  "Your BMI is " + ans;
	}

	
	//Print answers on section 3
	document.getElementById("bmi-calc").addEventListener("click", bmiCalculation)

	//Change bmi units
	function changeBmiUnits(){
		var units = getValue("bmi-units");

		if(units === "metric"){
			document.getElementById("bmi-mass-unit").innerHTML = "kg";
			document.getElementById("bmi-height-unit").innerHTML = "meter";
		}else if (units === "imperial"){
			document.getElementById("bmi-mass-unit").innerHTML = "pounds";
			document.getElementById("bmi-height-unit").innerHTML = "inches";			
		}

	}

	document.getElementById("bmi-units").addEventListener("change", changeBmiUnits)

	//Calculation for section 4
	function mortgageCalculation(){
		var loan = getFloat("mortgage-loan");
		var apr = getFloat("mortgage-apr");
		var term = getFloat("mortgage-term");
		var ans = (loan * apr * ((1+apr)^term) / (((1+apr)^term) - 1)).toFixed(2);

		document.getElementById("mortgage-answer-alert").innerHTML =  "The monthly cost of the loan is $" + ans;
	}

	
	//Print answers on section 4
	document.getElementById("mortgage-calc").addEventListener("click", mortgageCalculation)


}