// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });
  
//   const error = false;
  
//   if(!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
  
// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));

// Example #2
async function getUser() {
  // awaits response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // only proceeds once it is resolved
  const data = await response.json();

  // only proceeds once second promise is also resolved
  return data;
}

getUser().then(users => console.log(users));