/*
*
*
*       Complete the handler logic below
*       
*       
*/

// var convert = require('convert-units')

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    var result = 0;
    
    var nonLetters = input.replace(/[a-zA-Z]+/g, '');
    
    // console.log(nonLetters);
    
    
    if (nonLetters.length == 0) {
      return result = 1;
    }
    
      var split = nonLetters.split('/');
    // console.log(split.length);
    if (split.length > 2) {
      var result = "invalid number";
      
    } else if (split.length > 1){
      var result = split[0]/split[1];
      
    } else if (split.length <= 1) {
      var result = split.toString();
    }
    
      // console.log(split);
    
 
    return result;
     // console.log(result);
    
     
    
    
    
//     var result = eval(nonLetters); 
    
//     console.log(result);
//     if (result == undefined) {
//       return result = "invalid number";
//     } 
    
//     var y = nonLetters.split(' ');
// if(y.length > 1){
//     var z = y[1].split('/');
//     console.log(+y[0] + (z[0] / z[1]));
// }
// else{
//     var z = y[0].split('/');
//     if(z.length > 1){
//         console.log(z[0] / z[1]);
//     }
//     else{
//         console.log(z[0]);
//     }
// }
    
  };
  
  this.getUnit = function(input) {
    // var result;
    // if (input) {
    var unitList = ["lbs", "kg", "gal", "l", "mi", "km"]
    
    
    var result =  input.split(/[0-9]+/g).pop();
      console.log(result);
    
    if (unitList.indexOf(result.toLowerCase()) >= 0) {
   
      return result;
    }
    else return "invalid unit"
    
//       if (result == "" || undefined) {
//         return "invalid unit"
//       }
    
//     // console.log(result);
    
//     return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result = "";
    
    switch(initUnit.toLowerCase()) {
    case "lbs":
        result = "kg";
        break;
    case "gal":
        result = "L";
        break;
    case "mi":
        result = "km";
        break;
    case "kg":
        result = "lbs";
        break;
    case "l":
        result = "gal";
        break;
    case "km":
        result = "mi";
        break;
    default:
        result = "invalid unit";
}
    
  // console.log(result);
    
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result = "";
    
    switch(unit.toLowerCase()) {
    case "lbs":
        result = "pounds";
        break;
    case "gal":
        result = "gallons";
        break;
    case "mi":
        result = "miles";
        break;
    case "kg":
        result = "killograms";
        break;
    case "l":
        result = "liters";
        break;
    case "km":
        result = "killometers";
        break;
    default:
        result = "invalid unit";
}
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result = "";
    
     // var result = convert(initNum).from(initUnit.toLowerCase()).to(returnUnit.toLowerCase());
    
    switch(initUnit.toLowerCase()) {
    case "lbs":
        result = initNum * lbsToKg;
        break;
    case "gal":
        result = initNum * galToL;
        break;
    case "mi":
        result = initNum * miToKm;
        break;
    case "kg":
        result = initNum / lbsToKg;
        break;
    case "l":
        result = initNum / galToL;
        break;
    case "km":
        result = initNum / miToKm;
        break;
    default:
        result = "invalid unit";
}
    
    
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    if (returnNum.toString().indexOf('.') != -1) {
    var roundedNum = returnNum.toFixed(5);
    }
    
    var fullInitUnit = this.spellOutUnit(initUnit); 
    
    var fullReturnUnit = this.spellOutUnit(returnUnit); 
    
    
    
    var result = initNum + " " + fullInitUnit + " converts to " + roundedNum + " " + fullReturnUnit;
    // console.log(result);
    
    
    return result;
  };
  
}

module.exports = ConvertHandler;
