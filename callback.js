//süre tamamlandıktan sonra çalışıyor ml sn
setTimeout(() => {
  console.log("merhaba");
}, 2000);

//yazılan saniye kadar süre içerisinde çalışır
//setInterval(() => {
  //console.log("Merhaba ben her saniye çalışacağım");
//}, 1000);
//cb => callback parametresi ikinci yazdığımıza düşüyor ve fonksiyon çalışmaya devam ediyor
const sayHello = (cb) => {
  cb();

}
sayHello(() => {
  console.log("Hello");

});

import fetch from "node-fetch";
import axios from "axios";

//fetch("https://jsonplaceholder.typicode.com/users")
//.then((data) => data.json())
//.then((users) => {
//  console.log("Users yüklendi!!!!!", users);
//
//  fetch("https://jsonplaceholder.typicode.com/posts/1")
//  .then((data) => data.json())
//  .then(posts =>{
//    console.log("post 1 yüklendi",posts)
//
//    fetch("https://jsonplaceholder.typicode.com/posts/2")
//    .then((data) => data.json())
//    .then(data => console.log("Post 2 yüklendi" ,data))
//  });
//});


//async function getData() {
//  const {data : users} = await axios("https://jsonplaceholder.typicode.com/users");
//  console.log(users);
//
//  const {data : post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
//  console.log(post1);
//
//  const {data : post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");
//  console.log(post2);
//
//}
//getData();
//anonim
{async () => {
  console.log("Selam");

}}

const getComments = (number) => {
  // resolve : işlem başarıyla gerçekleşmiş bu da data, reject: kod çalışırken bir problem oluştu reject et
  return new Promise((resolve, reject) => {

    if (number === 1){
      resolve("Comments");
    }
    else if (number === 2){
      reject("Bir problem oluştu");
    }
  })
}


getComments(2)
.then((data) => console.log(data))
.catch((e) => console.log(e))


const getData = () => {
  return new Promise(async(resolve, reject) => {
    const {data} = await axios("https://jsonplaceholder.typicode.com/users");

    resolve (data);
  })
}



const getPosts = (num) => {
  return new Promise(async(resolve, reject) => {
    if (num === 1){
      const {data} = await axios("https://jsonplaceholder.typicode.com/posts/1");
      resolve(data)
    }

    else if (num === 2){
      const {data} = await axios("https://jsonplaceholder.typicode.com/posts/2");
      resolve(data)
    }
    else {
      reject("Bir Sorun Oluştu")
    }

  })
}


//(async () => {
//
//await getData()
//.then((data) => console.log(data))
//.catch((e) => console.log(e))
//
//try{
//  const post1 = await getPosts(1);
//  console.log("Post1: " , post1);
//}catch(e){
//  console.log(e);
//
//}
//await getPosts(2)
//.then((data) => console.log("Post 2: " , data))
//.catch((e) => console.log(e))
//})();

Promise.all([getData(),getPosts(1),getPosts(2)])
.then(console.log)
.catch(console.log)

