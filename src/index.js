module.exports = function toReadable (number) {
    let amount = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred"
    }
    let hundred;
    let tens;
    let units;
    hundred = Math.floor(number/100);
    tens = Math.floor((number - hundred*100)/10);
    units = number - hundred*100 - tens*10;
    if (hundred > 0) {
        if (tens > 1) {
            if (units > 0) return amount[hundred] + " " + amount[100] + " " + amount[tens*10] + " " + amount[units];
            else return amount[hundred] + " " + amount[100] + " " + amount[tens*10];
        }
        else if (tens === 1) {
            if (units > 0) return amount[hundred] + " " + amount[100] + " " + amount[tens*10 + units];
            else return amount[hundred] + " " + amount[100] + " " + amount[tens*10];
        }
        else {
            if (units > 0) return amount[hundred] + " " + amount[100] + " " + amount[units];
            else return amount[hundred] + " " + amount[100];
        }
    }
    else {
        if (tens > 1) {
            if (units > 0) return amount[tens*10] + " " + amount[units];
            else return amount[tens*10];
        }
        else if (tens === 1) {
            if (units > 0) return amount[tens*10+ units];
            else return amount[tens*10];
        }
        else return amount[units];
    }
}

