
    var num1 = Math.ceil(Math.random() * 20);
    var num2 = Math.ceil(Math.random() * 20);
    var num3 = Math.ceil(Math.random() * 20);
    var biggestNumber;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    document.getElementById("num3").innerHTML = num3;
    
    
    if(Math.max(num1, num2, num3) == num1&&num1 != num2&&num1 != num3){
		document.getElementById("yield").innerHTML = "The vegetable with the most amount of yield is: Tomato (" + num1 + ")";
	}
	else if(Math.max(num1, num2, num3) == num2&&num2 != num1&&num2 != num3){
		document.getElementById("yield").innerHTML = "The vegetable with the most amount of yield is: Lettuce (" + num2 + ")";
    }
	else if(Math.max(num1, num2, num3) == num3&&num3 != num1&&num3 != num2){
		document.getElementById("yield").innerHTML = "The vegetable with the most amount of yield is: Lettuce (" + num3 + ")";
    }
    else{
        document.getElementById("yield").innerHTML = "There seems to be a tie between the yields of these vegetables ?!";
    }
    

    var alphabet = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";


var starLet = alphabet[num1];
document.getElementById("starLet").innerHTML = "The farmer with the most plants planted name starts with: " + starLet;


minutes = num2*num3
hours = parseInt((num2 * num3) / 60);
miniminute = minutes % 60;
document.getElementById("hour").innerHTML = "The total amount of time you spent on planting is: "+minutes+" minutes or simplified as " +hours+ " hours and " +miniminute+ " minutes ";


