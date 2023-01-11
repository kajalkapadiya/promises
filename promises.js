const posts = [
    { title: "post one", body: "this is a post one", time: new Date().getTime()},
    { title: "post two", body: "this is a post two", time: new Date().getTime()}
]

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} last seen at ${(new Date().getTime() - post.time)/1000}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({...post, time: new Date().getTime()});
            const err = false;
            if (!err) {
                console.log("createPost is done")
                resolve();
            }
            else {
                reject("somthing went wrong!")
            }
        }, 2000)
    })
}

//delete function
function del() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //while (posts) {
            posts.pop();
            //}
            console.log("delete done");
            const err = false;
            if (!err) {
                resolve();
            }
            else {
                reject("somthing went wrong!")
            }
        }, 3000)
    })
}

//new promise last activity time
function lastSeen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.time = new Date().getTime();
            console.log("last seen")
            resolve(posts.time);
        }, 1000)
    })
}

function updatePost() {
    Promise.all([createPost, lastSeen])
        .then(([lastSeenresolve]) => {
            console.log(lastSeenresolve)
        })
        .catch(err => console.log(err))
}

createPost({ title: "post three", body: "this is a post three", time: "7th of feb" }).then(getPost).then(updatePost);
createPost({ title: "post four", body: "this is a post four", time: "8th of feb" })
    .then(getPost).then(del).then(updatePost)
    .then(getPost).then(del).then(updatePost)
    .then(getPost).then(del).then(updatePost)
    .then(getPost).then(del).then(updatePost)
    .then(getPost);;

    //promise all

// const promise1 = Promise.resolve("hello world!");
// const promise2 = 10;
// const Promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, "goodbye")
// )
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

// Promise.all([promise1, promise2, Promise3, promise4])
//     .then(values =>
//         console.log(values)
//     );

