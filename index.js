function scuberGreetingForFeet(checkFeet){

  if (checkFeet <= 400) {
    return "This one is on me!"
  } 
  else if (checkFeet > 2000 && checkFeet <= 2500){
    return "I will gladly take your thirty bucks."
  } 
  else if (checkFeet > 2500){
    return "No can do."
  }
};

scuberGreetingForFeet(2333);

function ternaryCheckCity(city){

  let response;

  city === "NYC" ?  response = "Ok, sounds good." : response = "No go.";

  return response;

}
ternaryCheckCity("NYC")

function switchOnCharmFromTip(tip){
  
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return "Bye."
      break;
  }
    
  }



switchOnCharmFromTip()