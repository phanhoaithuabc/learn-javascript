// Array.prototype.filter2 = function(callback){
//     var lengthArr = this.length, arr=[];
//     for(var i=0; i<lengthArr; i++){
//         var result = callback(this[i], i);
//         if (result){
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// };
// var course = ['java', 'php', 'js'];
// var s = course.filter2((course) =>{
//     return course.length >= 3;
// });
// console.log(s)


// var inputElement = document.querySelector('input[type="text"]')
// inputElement.oninput=function(e){
//     console.log(e.target.value)
// }


// // status promise: 1. pending (before running)
// //                 2. fulfilled (resolve)
// //                 3. reject (reject)
// var promise = new Promise(function(resolve, reject){
//     // logic
//     // thanh cong: resolve()
//     // that bai: reject()
//     resolve([
//         {
//             id: 1,
//             name: 'JavaScript',
//         }
//     ]);
//     // reject('Co loi!');
// });
// promise.then(function(data){ // promise chain
//     console.log(data);
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             resolve([1,2,3]);
//         }, 3000)
//     });
// }).then(function(data){
//     // console.log(data);
//     return data;
// }).then(function(data){
//     console.log(data);
// }).catch(function(e){
//     console.log(e);
// }).finally(function(){
//     console.log("Done!");
// })


// var promise = Promise.resolve("ok"); // alway ok
// promise.then((result)=> console.log('result: ', result))


// var promise1 = new Promise((resolve)=>
//     setTimeout(function(){
//         resolve([1,2]);
//     }, 2000));
// var promise2 = new Promise((resolve)=>
//     setTimeout(function(){
//         resolve([3]);
//     }, 4000));
// Promise.all([promise1, promise2]).then(
//     ([result1, result2]) => console.log(result1.concat(result2))
// );


// // example display comments
// var users=[
//     {
//         id: 1,
//         name: 'user1',
//     },
//     {
//         id: 2,
//         name: 'user2',
//     }
// ]
// var comments=[
//     {
//         id: 1,
//         user_id: 1,
//         content: 'ok'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'reply ok'
//     }
// ]
// function getUserByIds(userIds){
//     return new Promise((resolve)=>{
//         var result = users.filter((user) => 
//             userIds.includes(user.id));
//         setTimeout(function(){
//             resolve(result);
//         }, 1000)
//     })
// }
// function getComments(){
//     return new Promise(resolve =>
//         setTimeout(function(){
//             resolve(comments);
//         }, 2000));
// };
// getComments().then(comments=>{
//     var userIds = comments.map(comment => comment.user_id)
//     return getUserByIds(userIds).then(users => 
//     {
//         return {
//             users: users,
//             comments: comments,
//         }
//     })
// }).then(data => {
//     var html = '';
//     var commentBlock = document.getElementById('comment-block');
//     data.comments.forEach(comment => {
//         var user = data.users.find(user=>user.id===comment.user_id)
//         html+= `<li>${user.name}: ${comment.content}</li>`;
//     });
//     commentBlock.innerHTML = html;
// })


// // fetch example
// // run in terminal: json-watch --watch db.json
// var postAPI = 'https://jsonplaceholder.typicode.com/posts'
// fetch(postAPI)
//     .then(response => response.json())
//     .then(posts => {
//         var html = posts.map(post => {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`
//         });
//         var html = html.join('');
//         document.getElementById('post-block').innerHTML = html;
//     })


// // JSON server example
// var courseAPI = 'http://localhost:3000/courses';
// function start(){
//     getCourses(renderCourses);
//     handleCreateButton();
// }
// start();
// function getCourses(callback){
//     fetch(courseAPI).then(response=>response.json())
//         .then(callback)
// }
// function createCourse(data, callback){
//     var options={
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json; charset=utf-8',
//             // 'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         bydy: JSON.stringify(data),
//     };
//     fetch(courseAPI, options).then(response=>response.json())
//         .then(callback);
// }
// function deleteCourse(id){
//     var options={
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json; charset=utf-8',
//             // 'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     };
//     fetch(courseAPI+'/'+id, options).then(response=>response.json())
//         .then(callback);
// }
// function renderCourses(courses){
//     var listCoursesBlock = document.querySelector('#list-course');
//     var html = courses.map(course=>{
//         return `<li>
//                     <h4>${course.name}</h4>
//                     <p>${course.description}</p>
//                     <button onclick="deleteCourse(${course.id})">Xoa</button>
//                 </li>`;
//     });
//     listCoursesBlock.innerHTML = html.join('');
// }
// function handleCreateButton(){
//     var createBtn = document.querySelector('#create');
//     createBtn.onclick = function(){
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;
//         var data = {
//             name: name,
//             description: description,
//         }
//         createCourse(data, getCourses(renderCourses));
//     };
// }


// const returnObject = (a,b) => ({a:a, b:b});
// console.log(returnObject(1,2))
// // arrow function khong co context 'this' va khong lam constructor dc
// const course = {
//     name: 'a',
//     getname: () => {
//         return this; // undefine
//     }
// }
// console.log(course.getname())


// // class in ES6
// class Course{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     getname(){
//         return this.name;
//     }
// }
// const phpCourse = new Course("PHP", 400);


// // dinh nghia key, value cho object in ES6
// // dinh nghia method cho object ngan gon in ES6
// var names='java';
// var price=100;
// var course={
//     names,
//     price,
//     getName(){
//         return names;
//     }
// }
// console.log(course);

// // dinh nghia key object duoi dang bien in ES6
// var fieldName='name';
// var fieldPrice='price';
// const course={
//     [fieldName]: 'java',
//     [fieldPrice]: 400,
// }
// console.log(course);


// // default parameter value in ES6
// function logger(log='default err', type='warn'){
//     console[type](log);
// }
// logger('Message...')


// // destructuring, rest parameters(...) in ES6
// var arr = ['a', 'b', 'c'];
// var [a, ,c] = arr;
// console.log(a, c);

// var [x, ...rest] = arr;
// console.log(rest);

// var course = {
//     name: 'java',
//     price: 1000,
//     children: {
//         name: 'react',
//     }
// }
// var {name, ...newObject} = course;
// console.log(name, newObject)
// var {name:parentName, children:{name}} = course;
// console.log(parentName, newObject, name)

// function logger(...params){
//     console.log(params)
// }
// console.log(logger(1,2,3,4)) // tra ve 1 array


// // spread in ES6
// var arr1 = ['php', 'java', 'js'];
// var arr2 = ['react', 'django'];
// var arr3 = [...arr1, ...arr2];
// console.log(arr3);

// var object1 = {
//     name: 'js',
// };
// var object2 = {
//     price: 100
// };
// var object3 = {...object1, ...object2};
// console.log(object3);


// // tagged template literals
// function highlight([first, ...rest], ...value){
//     return value.reduce(
//         (acc, curr)=>[...acc, `<span>${curr}<span/>`, rest.shift()],
//         [first]
//     ).join('');
// }
// var brand = "IT";
// var course = "Java";
// const html = highlight`${course} in ${brand}`;
// console.log(html);


