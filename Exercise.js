/**
 * Kilometer to Meter Unit Conversion
 * @param Number km
 * @return Number meter
 */
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

/**
 * Budget Calculate for electronics store
 * @param Number clockQuantity , Number phoneQuantity , Number laptopQuantity ,
 * @return Number totalCost
 */
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
 * Kilometer to Meter Unit Conversion
 * @param Number km
 * @return Number meter
 */
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

/**
 * Budget Calculate for electronics store
 * @param Number clockQuantity , Number phoneQuantity , Number laptopQuantity ,
 * @return Number totalCost
 */
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
