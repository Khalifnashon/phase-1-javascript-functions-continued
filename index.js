// code your solution here
function saturdayFun(activity = "roller-skate") {
    return`This Saturday, I want to ${activity}!`;
}
saturdayFun(); 
saturdayFun("bath my dog"); 
function mondayWork(activity = "go to the office") {
    return`This Monday, I will ${activity}.`;
}
mondayWork(); 
mondayWork("work from home"); 


function wrapAdjective(greeting) {
    return function ( par = "special") {
      return `You are ${greeting}${par}${greeting}!`;
    };
}
  
wrapAdjective("*")("a hard worker");

