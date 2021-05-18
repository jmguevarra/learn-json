/*JSON & Javascript Object Literal

- 2 ways to add data in object literal
    1. directly inside the curly brackets
    2. add properties itself
*/

//JSON Object
const myCar = {
    "color"     : "red", //directly
    "company"   : "Ford"
};

//Outside like adding properties itself
myCar.model = "Mustang"
myCar.year = "2017";
myCar.price = 5000;

/** -------------------------------------------- */

//Javascript Object
const myCar2 = { 
    color : "red", //directly
    company : "Ford",  
}

//Outside like adding properties itself
myCar.model = "Mustang"
myCar2.year = "2017";
myCar2.price = 5000;



/** Usage -------------------------------------------- */

/**Different style to display values in object */
console.log(myCar.color);
console.log(myCar2.color);

console.log(myCar["model"]);
console.log(myCar2["model"]);

console.log(myCar['company']);
console.log(myCar2['company']);
const temp = 'color';

console.log(myCar[temp]);
console.log(myCar2[temp]);


