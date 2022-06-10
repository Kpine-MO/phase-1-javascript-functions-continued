// code your solution here
function saturdayFun(a = 'roller-skate') {
    let message = `This Saturday, I want to ${a}!`
    return message;
}

function mondayWork(a = 'go to the office') {
    let message = `This Monday, I will ${a}.`
    return message;
}



function wrapAdjective(x) {
    const innerFunction = function (y) {
      return `You are ${x}${y}${x}!`;
    };
    return innerFunction
  }
  
  wrapAdjective("*")("a hard worker");