var fs = require("fs");
var myobj = {};
//fs.readFile("C:\\Users\\anwesha.sinha\\Desktop\\file1.txt", function (
//callback chaining
// fs.readFile("file1.txt", function (err, data) {
//   if (!err) {
//     myobj["data1"] = data.toString();
//     fs.readFile("file2.txt", function (err, data) {
//       if (!err) {
//         myobj["data2"] = data.toString();
//         console.log(myobj);
//       }
//     });
//   }
// });

//Promises
function doA() {
  return new Promise(function (resolve, reject) {
    fs.readFile("file1.txt", function (err, data) {
      if (!err) {
        resolve(data.toString());
      }
    });
  });
}

function doB() {
  return new Promise(function (resolve, reject) {
    fs.readFile("file2.txt", function (err, data) {
      if (!err) {
        resolve(data.toString());
      }
    });
  });
}
// doA().then(function (data) {
//   myobj["data1"] = data;
//   doB().then(function (data2) {
//     myobj["data2"] = data2;
//     console.log(myobj);
//   });
// });

async function main() {
  myobj["data1"] = await doA();
  myobj["data2"] = await doB();
  console.log(myobj);
}
main();
