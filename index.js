/*function scuberGreetingForFeet(someValue){
  // Write your code here!
  let result
  if (feet <= 400) {
    result = someNumber; 
    else
  }
  return result
} */

/*function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (399 < feet && feet 1999) {
    return "That will be twenty bucks."
  } else if (2000 < feet) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}*/

function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (400 < feet && feet < 2000) {
    return "That will be twenty bucks.";
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous' :
      return 'Thank you so much.';
    case 'not as generous' :
      return 'Thank you.';
    default:
      return 'Bye.';  
  } 
  // Write your code here!
}