const hello = (name) => {
  console.log("Hello World from my-module.js " + name);
  console.log(`hello ${name}`);

}


function sum (num1, num2){
  return num1 + num2;
}

const substract = (num1,num2) => {
  if (num1 >num2){
    return num1 - num2;
  }
  else {
    return num2 - num1;
  }
}

const sum3 = function sum1(num1, num2) {
  return num1 + num2;
}

const sum1 = (a, b) =>{
  return a + b;
}

const sum2 = (a, b) => a + b;

const text = 'Text';

const user = {
  name : 'Betül',
  surname : 'Salim',
}

const users = [{
  name: 'Betül',
  surname : 'Salim'
},{
  name: 'Burak',
  surname: 'Salim'
},{
  name: 'Nesrin',
  surname: 'Salim'
},{
  name: 'İbrahim',
  surname: 'Salim'
}]

export{
  hello,
  sum,
  sum1,
  sum2,
  sum3,
  substract,
  text,
  user,
  users
}