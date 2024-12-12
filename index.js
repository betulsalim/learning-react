console.log("Hello World");
//ES6 dan önce yapılan işlem ES6 ile beraber "import" olayını kullanabiliyoruz bunun için .json dosyasına type:modul eklenmesi lazım
//var slugify = require('slugify');
import  slugify  from "slugify";
const title = slugify('some string lorem ipsum');
const title1 = slugify('some string lorem ipsum','*');
console.log(title);
console.log(title1);

import  {hello,sum,sum1,sum2,sum3,substract,text,user,users} from "./my-module.js";
console.log(sum(2,4));
console.log(sum1(3,5));
console.log(sum2(7,8));
console.log(sum3(9,9));
hello("Betül");
console.log(substract(67,88));
console.log(text);
console.log(user);
console.log(users);
