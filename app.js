// const fs = require('fs');

// console.log('hello')
// fs.open('dima.json','w', (err, fd)=>{
//     console.log(err, fd);
// })
// fs.appendFile('./dima.json', JSON.stringify({name:'dima',gender:'male'}),(err)=>{
//     console.log(err);
// })
// fs.truncate('dima.json',(err)=>{
//     console.log(err);
// })

// fs.rename('./dima.json','./boys/dima.json', (err)=>{
//     console.log(err);
// })
// fs.writeFile('./girls/vasya.json', JSON.stringify({name:'vasya',gender:'male'}),(err)=>{
//     console.log(err);
// })

// fs.readdir('./boys',(err, files)=>{
//     for (const fileName of files) {
//         fs.readFile('./boys/'+fileName.toString(),(err, data)=>{
//             console.log(data.toString());
//             if(JSON.parse(data.toString()).gender === 'female'){
//                 fs.rename('./boys/'+fileName.toString(),'./girls/'+fileName.toString(),(err)=>{
//                     if(err) console.log(err);
//                 });
//             }
//             if(err) console.log(err);
//         })
//      }
// })

//
// fs.readdir('./girls',(err, files)=>{
//     for (const fileName of files) {
//         fs.readFile('./girls/'+fileName.toString(),(err, data)=>{
//             console.log(data.toString());
//             if(JSON.parse(data.toString()).gender === 'male'){
//                 fs.rename('./girls/'+fileName.toString(),'./boys/'+fileName.toString(),(err)=>{
//                     if(err) console.log(err);
//                 });
//             }
//             if(err) console.log(err);
//         })
//     }
// })