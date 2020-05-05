const posts = [
  { title: "post one", body: "this is post 1" },
  { title: "post two", body: "this is post 2" },
];
//here forEach(), setTimeout() are going to take callback function
// function getPosts() {
//   //setTimeout(()=>{})
//   setTimeout(function () {
//     let output = "";
//     //posts.forEach((post,index)=>{})
//     posts.forEach(function (post, index) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }
// getPosts();

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 5000);
// }
// getPosts();
// createPost({ title: "post three", body: "this is post three" }, getPosts);

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error Something went wrong");
      }
    }, 5000);
  });
}

//async await
// async function init() {
//   await createPost({ title: "post three", body: "this is post three" });
//   getPosts();
// }
// init();

// createPost({ title: "post three", body: "this is post three" })
//   .then(getPosts)
//   .catch((error) => console.log(error));

// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "goodmorning");
// });
// const promise4 = fetch(
//   "https://jsonplaceholder.typicode.com/users"
// ).then((res) => res.json());
// Promise.all(promise1, promise2, promise3, promise4).then((values) =>
//   console.log(values)
// );

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
fetchUsers();
//jiska ander promise waala function daala hain usse await krra rhe hain

//several classes raises different types of events
//Ex: class HTTP gives event new request
//EventEmitter is a class which has properties
