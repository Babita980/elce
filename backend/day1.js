// example of synchronous
//***** */ data reading******
// const fs=require('fs')
// const data=fs.readFileSync("data.txt","utf8");
// console.log(data);
// const fs=require('fs');
// console.log("1");
// const data=fs.readFileSync("data.txt","utf8");
// console.log(data);
// console.log("2");
// ******data writing*****
// const fs=require('fs');
// fs.writeFileSync("elc.txt","hy i am student of abes");
// const fs=require('fs');
// fs.readFile("data.txt","utf8",(err,data)=>{
//     console.log(data)

// });
const fs=require('fs');
fs.writeFile("babita.txt","hello i am learning node js",(err,data)=>{
    console.log(data)
});
