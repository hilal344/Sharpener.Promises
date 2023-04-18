const posts = [{ title: 'post one', body: 'this is post one', createdAt: new Date().getTime() },
{ title: 'post two', body: 'this is post two', createdAt: new Date().getTime() }
];

let intervalId = 0;
function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++) {
            output += `<li> ${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt) / 1000} seconds ago </li>`;
        }
        document.body.innerHTML = output;

    }, 1000)



}

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push({ ...post, createdAt: new Date().getTime() });
//         // callback();
//     }, 2000);
// }

function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
            resolve(posts)
        }, 1000);
    })
}


// function create4thPost(creatcall, callback) {
//     setTimeout(() => {
//         creatcall({ title: 'post four', body: ' this is post four' });

//         callback();
//     }, 3000);
// }

function create4thPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
           posts.push({ ...post, createdAt: new Date().getTime() });
            resolve(posts)
        }, 1000);
    })
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastactivitytime = new Date().getTime();
            resolve(user.lastactivitytime);
        }, 1000);
    })
}

function deletePosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (posts.length > 0) {
                const lastElement = posts.pop();
                resolve(lastElement);
            }
            else {
                reject('array is empty ');
            }

        }, 10000)
    });
}
// getPosts();

// create4thPost(createPost, getPosts);

const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'good bye')
);

const user = {
    username: 'abdullah',
    lastactivitytime: '19th of nov'
}

const user2 = {
    username: 'hilal',
    lastactivitytime: '18th of nov'
}

createPost({ title: 'post three', body: ' this is post three' });
    
Promise.all([create4thPost({ title: 'post four', body: ' this is post four' }),
 updateLastUserActivityTime()])
    .then(values => {console.log(values)
        deletePosts().then(getPosts()).then(values => console.log(values, posts));
    });

