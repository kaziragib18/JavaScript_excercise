//use bracket notation 

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];


//use bracket notation to find  the Nth

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];



// convertCelsiusToFahrenheit


function convertToF(celsius) {
    var fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  convertToF(30);


//Counting Cards on javascript

var count = 0;

function cc(card) {
    
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            count += 0;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1;
            break;
    }

    if (count >= 1)
        return count + " Bet";
    else if (count <= 0) {
        return count + " Hold";
    }

    return count;
}


// Add/remove calls to test your function.

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');




// Kilometer to Meter Unit Conversion//
//@param Number km
 // @return Number meter

function kilometerToMeter(km) {
    if (typeof km != "number") {
        return "Please Input Number Please! ";
    }
    if (km < 0) {
        return "Please Input Positive Unit";
    }
    // 1km = 1000 meter
    return km * 1000;
}

//Budget Calculate for electronics store
// @param Number clockQuantity , Number phoneQuantity , Number laptopQuantity ,
 // @return Number totalCost

function budgetCalculator(clockQuantity, phoneQuantity, laptopQuantity) {
    // Validation
    if (
        typeof clockQuantity != "number" ||
        typeof phoneQuantity != "number" ||
        typeof laptopQuantity != "number"
    ) {
        return "Wrong Input! Please Provide all credentials properly";
    }
    if (clockQuantity <= 0 || phoneQuantity <= 0 || laptopQuantity <= 0) {
        return "Wrong Input! Please Provide valid quantity (minimum 1 quantity)";
    }

    var clockPrice  = clockQuantity * 50; // 1 clock = 50TK
    var phonePrice  = phoneQuantity * 100; // 1 phone = 100TK
    var laptopPrice = laptopQuantity * 500; // 1 laptop = 500TK

    var totalCost   = clockPrice + phonePrice + laptopPrice;
    return totalCost;
}

/**
 * Hotel Booking cost calculation for some cases
 * @param Number stayDayCount
 * @return Number totalCost
 */
function hotelCost(stayDayCount) {
    if (typeof stayDayCount != "number") {
        return "Input Number Please!";
    }
    if (stayDayCount < 0) {
        return "Invalid Input, You can't stay minus day";
    }
    
    var totalCost = 0;
    var first10DayCost = 10 * 100;
    var second10DayCost = 10 * 80;

    // firstCase - first 10 stay days cost is 100TK/1Day
    if (stayDayCount <= 10) {
        totalCost = stayDayCount * 100;
    }
    // secondCase - 11-20 stay days cost is 80TK/1Day -(firstCaseCost included like VAT)
    else if (stayDayCount <= 20) {
        var remaining        = stayDayCount - 10;
        var second10DayCost  = remaining * 80;
        totalCost            = first10DayCost + second10DayCost;
    }
    // thirdCase - 20+ stay days cost is 50TK/1Day -(firstCaseCost & secondCaseCost included like VAT)
    else {
        var remaining       = stayDayCount - 20;
        var thirdCaseCost   = remaining * 50;
        totalCost           = first10DayCost + second10DayCost + thirdCaseCost;
    }
    return totalCost;
}

/*
* Finding Longest Named friend's name from an array
 * @param Array friends
 * @return String largestNamedFriend
 */

function megaFriend(friends) {
    // Santization of Input
    if (typeof friends !== "object") {
        return "Input must be a valid array of strings";
    }
    // empty array Santization
    if (!friends.length) {
        return "Please marry first :) You need a friend to make life easier";
    }
    var largestNamedFriend = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var friendName = friends[i];
        if (typeof friendName == "number" || friendName == "" || friendName == " " || friendName == "  ") {
            return "Minimum one friend name is  or not proper String, Please provide valid names";
        }
        if (friendName.length > largestNamedFriend.length) {
            largestNamedFriend = friends[i];
        }
    }
    return largestNamedFriend;
}

` js
    // TESTING
    
    var friends = ["kazi","Md Rahat","Ragib"];
    var getMegaFriendResult = megaFriend(friends);
    console.log(getMegaFriendResult);
