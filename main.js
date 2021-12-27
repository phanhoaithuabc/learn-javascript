// run terminal: node main.js


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


// // IIFE - Immediately Invoked Function Expression
// // self-invoking function - ham tu goi
// ((message)=>console.log(message))('hello')
// ;(function(message){         // another way
//     console.log(message)
// }('hello'))
// +function(message){         // another way
//     console.log(message)
// }('hello')
// // example
// const app = (function(){
//     // private variable
//     const cars = []
//     return{
//         add(car){
//             cars.push(car)
//         },
//         edit(index, car){
//             cars[index] = car
//         },
//         delete(index){
//             cars.splice(index, 1)
//         },
//     }
// })()


// // closure example
// function createLogger(namespace){
//     function logger(message){
//         console.log(`[${namespace}] ${message}`);
//     }
//     return logger
// }
// const infoLogger = createLogger('INFO');
// infoLogger('Sending email...');
// infoLogger('Sending email failure, try again...')

// function createStorage(key){
//     const store = JSON.parse(localStorage.get(key)) ?? {}
//     const save = () => {
//         localStorage.setItem(key, JSON.stringify(store));
//     }
//     const storage = {
//         get(key){
//             return store[key];
//         },
//         set(key, value){
//             store[key] = value;
//             save();
//         },
//         delete(key){
//             delete store[key];
//             save();
//         }
//     }
//     return storage;
// }
// const profileSetting = createStorage('profile_setting');
// console.log(profileSetting.get('fullName'));
// profileSetting.set('fullName','PHT'); 


// // hoisting example
// console.log(a) // undefine
// var a=1
// // let, const khi hoisting dc dua vao 'Temporal Dead Zone'
// console.log(b) //Uncaught ReferenceError: Cannot access 'b' before initialization
// let b=1


// // strict mode example
// // 'use strict'
// fullName = 'a';
// function test(){
//     // 'use strict'
//     age = 1;
// }
// test()
// console.log(fullName)
// console.log(age)


// // // strict mode example
// // bao loi khi gan lai cho thuoc tinh co wriable:false
// 'use strict'
// const student = {
//     name: '1'
// }
// student.name = '2' // wriable:true
// console.log(student)

// // const student2 = Object.freeze({ // wriable:false
// //     name: '1'
// // })
// // student2.name = '2' // error if use strict
// // console.log(student2)

// const student3 = {}
// Object.defineProperties(student3, {
//     'name':{
//         value: '1',
//         wriable:false,
//     }
// })
// student3.name = '2' // error if use strict
// console.log(student3)


// // // strict mode example
// // bao loi khi xoa nhung thu khong dc xoa
// 'use strict'
// const student = {
//     name: '1'
// }
// delete student


// // strict mode example
// // bao loi khi ham co tham so trung ten
// 'use strict'
// function sum(a, a) {
//     return a + a
// }
// console.log(a(1,2))


// // strict mode example
// // khai bao ham trong block thi se thuoc block
// // 'use strict'
// {
//     function sum(a, a) {
//         return a + a
//     }
// }
// console.log(a(1,2))


// // strict mode example
// // bao loi khi dat ten bien trung tu khoa
// 'use strict'
// const private = 1


// // Value types & reference types | Tham trị & tham chiếu 
// // Value types (primitive data type): string, number, boolean, 
// // bigint, symbol, undefined, null => luu gia tri cua bien
// // reference types (non-primitive data type): object, array, 
// // function => luu gia tri cua o nho cua bien
// const student = {
//     name: 'ab',
//     profile: {
//         firstName: 'a',
//         lastName: 'b'
//     }
// }
// const studentProfile = student.profile;
// student.profile.firstName = 'a1';
// console.log(studentProfile.firstName)

// const a = {name:1}
// const b = {name:1}
// console.log(a===b, a==b)


// // keyword 'this' trong 1 ham la undefined trong strict mode,
// // la Window trong nomal mode
// function Car(name, color){
//     this.name = name;
//     this.color = color;
// }
// Car.prototype.run = function(){
//     console.log('car: ',this); // 'this' is Car

//     // day la ham chu khong phai phuong thuc cua Car, truong
//     // hop arrow function khong co 'this' thi 'this' la Car
//     const testArrow = () => console.log('arrow f: ',this) // 'this' is Car
//     function test(){ 
//         console.log('test function: ',this) // 'this' is Window
//     }
//     testArrow()
//     test()
// }
// const max = new Car('a', 'red')
// max.run()


// // bind example => gan this cho ham
// this.name = 'a'
// const person = {
//     name: 'b',
//     getName(data){
//         console.log(data)
//         return this.name;
//     }
// }
// console.log(person.getName()); // 'b'
// const getPersonName = person.getName; // 'a'
// console.log(getPersonName())
// // rang buoc method getName cho doi tuong person
// const getPersonName2 = person.getName.bind(person); // 'b'
// console.log(getPersonName2())
// console.log(getPersonName2('c')) // tham so cua bind

// // const $ = document.querySelector
// // console.log($('#heading')) // error before of wrong context 
// const $$ = document.querySelector.bind(document)
// console.log($$('#heading'))

// const app = (() =>{
//     const cars = []
//     const root = $$('#root')
//     const submit = $$('#submit')
//     const input = $$('#input')
//     return{
//         add(car){
//             cars.push(car)
//         },
//         delete(index){
//             cars.splice(index, 1)
//         },
//         render(){
//             const html = cars.map((car,index) => 
//                 // data-index: la 1 property tao ra 1 object
//                 // ten la dataset trong DOM, 'data-': tao ra 1 
//                 // dataset 'index' dat ten gi cung dc
//                 `<li>
//                     ${car}
//                     <span class='delete' data-index='${index}'>&times</span>
//                 </li>`).join('')
//             root.innerHTML = html;
//         },
//         handleDelete(e){
//             const deleteBtn = e.target.closest('.delete')
//             if (deleteBtn){
//                 const index = deleteBtn.dataset.index;
//                 this.delete(index)
//                 this.render()
//             }
//         },
//         init(){
//             // const that = this // get context cua app
//             // submit.onclick = function(){
//             //     const car = input.value
//             //     that.add(car)
//             //     that.render()
//             // }
//             // another way: arrow function (khong co 'this' nen
//             // tu dong lay 'this' ben ngoai)
//             submit.onclick = () => {
//                 const car = input.value
//                 this.add(car)
//                 this.render()
//                 input.value = null
//                 input.focus()
//             }
//             root.onclick = this.handleDelete.bind(this) // or bind(app)
//         }
//     }
// })();
// app.init()


// // Call method example = (bind + run function)
// function test(){
//     console.log('Test Call!')
// }
// test.call()

// // tinh ke thua su dung call
// function Animal(name){
//     this.name = name;
// }
// function Chicken(name, weight){
//     Animal.call(this, name);
//     this.weight = weight;
// }
// const chicken = new Chicken('a', 60)
// console.log(chicken)

// // muon ham khi doi tuong khong co
// function logger(){
//     // Arguments khong co forEach, muon su dung forEach
//     // trong Arguments ta muon cua Array
//     console.log(arguments)
//     // trong forEach su dung this de lay phan tu trong Array
//     // khi call bind arguments => this === arguments 
//     Array.prototype.forEach.call(arguments, item => {
//         console.log(item)
//     })
// }
// logger(1,2,3)


// // apply method example: apply cho phep goi 1 ham voi 1 this
// // va truyen doi so cho ham goc duoi dang mang
// const teacher = {
//     firstName: 'a',
//     lastName: 'b',
//     isOnline: false,
//     goOnline(){
//         this.isOnline = true;
//         console.log(`${this.firstName} ${this.lastName} is onl`)
//     },
//     goOffline(){
//         this.isOnline = false;
//         console.log(`${this.firstName} ${this.lastName} is off`)
//     },
// }
// const me = {
//     firstName: 'c',
//     lastName: 'd',
//     isOnline: false,
// }
// function great(greating, message){
//     return `${greating} ${this.firstName} ${this.lastName} ${message}`
// }
// // apply vs call
// console.log(great.apply(teacher,['hi', 'how are you']))
// console.log(great.call(teacher,'hi', 'how are you'))
// // function borrowing with apply
// console.log('Teacher: ',teacher.isOnline)
// teacher.goOnline()
// console.log('Teacher: ',teacher.isOnline)
// console.log('Student: ',me.isOnline)
// teacher.goOnline.apply(me)
// console.log('Student: ',me.isOnline)

// // ke thua voi apply
// function Animal(name){
//     this.name = name;
// }
// function Chicken(weight){
//     Animal.apply(this, arguments); // array
//     this.weight = weight;
// }
// const chicken = new Chicken('a', 60)
// console.log(chicken)


