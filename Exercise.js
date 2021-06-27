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


