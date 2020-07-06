const http = new easyHTTP;

// Get posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
//     // Check for error first
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(posts);
//         }
// });

// Create data
const data = {
    title: "Custom Post",
    body: "This is a custom post",
};

// Create post
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Delete post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, response) {
    // Check for error first
        if(err) {
            console.log(err);
        } else {
            console.log(response);
        }
});