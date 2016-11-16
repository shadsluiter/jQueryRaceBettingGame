// JS for Car racing game

// total victories for each car
var numberOfTimesWon = [0,0,0,0,0,0];
 var PlayerMoney = "200";
var numberOfCarsInRace = 2;
 var alerted = localStorage.getItem('alerted') || '';
// click the go button

$('#instructionstitle').click(function() {
		console.log("instruct click");
		$('#intruct').slideToggle();	
	});
	
//$('#intruct').hide();

$('#go').click( function() {
	$('#go').prop("disabled",true);
	 
	console.log("You money = " + PlayerMoney);
	$('#intruct').slideUp();
	$('.car').css('left', '0');
		$('.raceInfo span').text('');
	
	//control the number of care in the race
	if (PlayerMoney <= 250) {
		numberOfCarsInRace = 2;
		$("#levelH").html("Level 1");
} else if ( (PlayerMoney => 250)  && (PlayerMoney <= 350) ) {
		numberOfCarsInRace = 4;
		$("#levelH").html("Level 2");
}
 else if  (PlayerMoney => 350)   {
		numberOfCarsInRace = 6;
		$("#levelH").html("Level 3");
}	
	console.log("cars in the race = " + numberOfCarsInRace);
	
	//alert for each level	
	//if ((numberOfCarsInRace == 2) || (alerted != 'yes')) {
		
        
   //      swal("Level 1")
 //        localStorage.setItem('alerted','yes');
        
//	} else if (numberOfCarsInRace == 4) {
//		swal("Good job!", "You now on Level 2!", "success");
//	} else if (numberOfCarsInRace == 6) {
//		swal("Yay!", "Level 3!", "success");
//	}
	
	//chosen car
	if($("input[type='radio'].radioBtnClass").is(':checked')) {
    var chosenCar = $("input[type='radio'].radioBtnClass:checked").val();
	var amountOfBetPlaced =  $("#txt_name").val(); 
	  
	function checkIfComplete(){
		
		if(isComplete == false) {
			isComplete = true;
			$('#go').prop("disabled",false);
		} else {
			place = 'Did not win ';
		}
		
	}}
	var carWidth= $('#car1').width();
	var raceTrackWidth= $(window).width() - carWidth;

	// use arrays instead of multiple variables.  car1, car2 car 3 car4 goes to car[0], car[1] etc
	var raceTimes = [];
	
	for (var i=0; i<6; i++) {
		raceTimes[i] = Math.floor((Math.random() * 1000)+  4000 );
	}
	
	
	// find the winner
	
	//first, set the winning time and winning number to a fake value. all cars will be beat this time.
	var lowestTime = 10000;
	var winnerNum = 6;
	
	// check each car against the lowest time var.
	for (var i=0; i<numberOfCarsInRace; i++) {
		if (raceTimes[i] < lowestTime ) {
			// we found a new lowest time, assign it to the lowestTime
			lowestTime = raceTimes[i];
			winnerNum = i;
		}
	}
	
// now, the lowestTime var has the winning time.  least time.
// now the winnernum var has the number of the winning car.
console.log(" Chosen car = " + chosenCar);
console.log(" winning car = " + winnerNum);

console.log(" amount of the bet = " + amountOfBetPlaced);

if ((chosenCar == winnerNum) && (numberOfCarsInRace == 2)) {
		PlayerMoney = parseInt(PlayerMoney) + (parseInt(amountOfBetPlaced)* 2);
	$("#betMoney").text("$" + PlayerMoney);
	} else if ((chosenCar == winnerNum) && (numberOfCarsInRace == 4)) {
		PlayerMoney = parseInt(PlayerMoney) + (parseInt(amountOfBetPlaced)* 4);
	} else if ((chosenCar == winnerNum) && (numberOfCarsInRace == 6)) {
		PlayerMoney = parseInt(PlayerMoney) + (parseInt(amountOfBetPlaced)* 6);
	}else {
		PlayerMoney = PlayerMoney - $("#txt_name").val();
	}



$("#betMoney").text("$" + PlayerMoney);
	
	if (PlayerMoney <= 0){
		sweetAlert("Oops...", "Out of money! Game Over!", "error");
		$("#go").attr('disabled', 'disabled');
	}
	
	if (PlayerMoney > 499){
		
		swal({   title: "Sweet!",   
		text: "You WON!!!",   
		imageUrl: "img/firework.jpg" });
		
		$("#go").attr('disabled', 'disabled');
	}
	
	// this keeps of track of how many times a player has won a race.  
	numberOfTimesWon[winnerNum]++;
	
	
	
	// check to see if the player won his bet
	// update his cash to show winnings or loss
	
	
	
	console.log("Lowest time was " + lowestTime);
	
	
	
	var isComplete = false;
	var place = 'Winner!';
	
	// Car 1
	

	$('#car1').animate({
		
		left: raceTrackWidth,
		
		
		
	}, raceTimes[0],"swing", function(){
		
		checkIfComplete();
		
		$('#raceInfo1 span').text( place + ' and clocked in at ' + raceTimes[0] + ' milliseconds! This car has won '
		+ numberOfTimesWon[0] + ' time'	);
		
	});
	//Car 2
	$('#car2').animate({
		
		left: raceTrackWidth,
		
		
	}, raceTimes[1],"swing", function(){
		
		checkIfComplete();
		
		$('#raceInfo2 span').text( place + ' and clocked in at ' + raceTimes[1] + ' milliseconds! This car has won '
		+ numberOfTimesWon[1]  + ' time'	);
		
	});

	

	if (numberOfCarsInRace >= 4) {
		
	$("#racetrack2").css("display","block");
	$("#raceInfo3").css("display", "block");
	$("#raceInfo4").css("display", "block");
	
	$('#car3').animate({
		
		left: raceTrackWidth,
		
		
	}, raceTimes[2],"swing", function(){
		
		checkIfComplete();
		
		$('#raceInfo3 span').text( place + ' and clocked in at ' + raceTimes[2] + ' milliseconds! This car has won '
		+ numberOfTimesWon[2] + ' time'	);
		
	});
	// Car 4 
	$('#car4').animate({
		
		left: raceTrackWidth,
		
		
	}, raceTimes[3],"swing", function(){
		
		checkIfComplete();
		
		$('#raceInfo4 span').text( place + ' and clocked in at ' + raceTimes[3] + ' milliseconds! This car has won '
		+ numberOfTimesWon[3] + ' time'	);
		
	});
	
	} else if (numberOfCarsInRace < 4) {
		
		$("#racetrack2").css("display","none");
		$("#raceInfo3").css("display", "none");
		$("#raceInfo4").css("display", "none");
		
	}
	
	if (numberOfCarsInRace == 6) {
	// Car 5
	
		
		$("#raceInfo5").css("display", "block");
		$("#raceInfo6").css("display", "block");
		$("#racetrack3").css("display", "block");
		
	$('#car5').animate({
		
		left: raceTrackWidth,
		
		
		
	}, raceTimes[4],"swing", function(){
		
		checkIfComplete();
		
		$('#raceInfo5 span').text( place + ' and clocked in at ' + raceTimes[4] + ' milliseconds! This car has won '
		+ numberOfTimesWon[4] + ' time'	);
		
	});
	// Car 6
	$('#car6').animate({
		
		left: raceTrackWidth,
		
		
		
	}, raceTimes[5],"swing", function(){
		
		checkIfComplete();
		
		$('#raceInfo6 span').text(place + ' and clocked in at ' + raceTimes[5] + ' milliseconds! This car has won '
		+ numberOfTimesWon[5] + ' time'	);
		
	});
	
	} else if (numberOfCarsInRace < 6) {
		
		$("#racetrack3").css("display","none");
		$("#raceInfo5").css("display", "none");
		$("#raceInfo6").css("display", "none");
		
	}
		
		
	
	$('#reset').click(function() {
		
		$('.car').css('left', '0');
		$('.raceInfo span').text('');
		console.log("33");
		
	});
	
	
});


















