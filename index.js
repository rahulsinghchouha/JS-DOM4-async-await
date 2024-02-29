// setTimeout(function(){
//     console.log('jay shree ram');
// },5000)

// function sync(){
// console.log('first');
// }
// sync();

// console.log('second');

// let meraPromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){console.log('mera promise1');},8000)

//     // resolve(1234);
//     reject(123456);
//     // reject(new Error('Bhaisaheb error aaye hai'))
// })

// let meraPromise2=new Promise(function(resolve,reject){
//     setTimeout(function(){console.log('mera promise2');},5000)

//     // resolve(1234);
// //    reject(new Error('Bhaisaheb error aaye hai'))
// })

// meraPromise1.then((value)=>{console.log(value)},(error)=>console.log('received an error'));

// // meraPromise1.catch((error)=>console.log('received an error'));

// console.log('jay maa bhwani');

// let wada1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('waadaa 1');
//     },3000);
//     resolve(1234);
// })

// let output=wada1.then(()=>{
//   let wada2 = new Promise(function(resolve,reset){
//     setTimeout(()=>{
//         console.log('wadaa 2');
//     },2000);
// resolve('wada 2 solwed');
// })
// return wada2;
// })

// output.then((value)=>console.log(value));

// async function abcd(){
//     return 10;
// }
// abcd();


// async function utility(){

//     let delhiMausam=new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             resolve('delhi is cool');
//         },1000);
//     })

//     let hydMausam = new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             resolve('hyderbaad is hot');
//         },2000);
//     })

//     let dm=delhiMausam;
//     let hm=hydMausam;

//     return[dm,hm];

// }
// async function utility(){
//     let content= await fetch('https://jsonplaceholder.typicode.com/posts/1');

//     let output= await content.json();
//     console.log(output);
// }
// utility();
async function helper(){

let options= {
method: "POST",
body: JSON.stringify({
  userId: 2002,
  title: "Rahul_Rajput",
  weight:90,
  completed: false
}),
headers: {
  "Content-type": "application/json; charset=UTF-8"
}
}
let content= await fetch("https://jsonplaceholder.typicode.com/todos",options);

let response= await content.json();
return response;
}

async function utility(){
    let ans=await helper();
    console.log(ans);
}
utility();

