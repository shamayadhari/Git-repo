// let obj={
//     name:"Devendra",
//     address:"Gurgaon",
//     age:23
// }
// let obj2={
//     name:"Devendra",
//     address:"Gurgaon",
//     age:23
// }
// obj.age=50
// console.log(obj)

// const para=document.querySelector(".para")
// para.innerText="this is updated one"
// console.info(document)

// console.log("Helllo Studentss!")

// let obj={
//     type:"Wooden",
//     color:"Brown",
//     length:"7ft"
// }

// let obj2={
//     type:"iron",
//     color:"Brown",
//     length:"7ft"
// }

// obj.type="Plastic"
// console.log(obj)

// console.log(document)

// const para=document.querySelector(".para")
// para.innerText="This is a new paragraph"
// para.style.color="green"
// console.log(para)

// console.log(document)


// const para=document.getElementById("para")
// para.innerText="This is a new paragraph"
// para.style.color="green"
// console.log(para)

// const para2=document.getElementsByClassName("para")  //return HTMLCollection
// para2[0].innerText="This is a new paragraph"
// para2[1].style.color="green"
// console.log(para2)

// const para=document.querySelectorAll(".para")  //return NodeList
// para[0].textContent="This is a new paragraph"
// para[1].style.color="green"
// console.log(para)

// let arr=[23,54,46,232,564,23]

// // const newArr=arr.map((ele)=>ele)  //it returns a new array
// arr.forEach((ele)=>console.log(ele))  //it does not returns a new array


// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a Heading</h1>"
// console.log(container)

// function message(event)
// {
//     console.log(event.key)
//     // alert("You have clicked the button")
// }

// const btn=document.querySelector("button")
// btn.classList.add("btn")
// btn.classList.remove("btn")
// btn.addEventListener('click',message)
// btn.addEventListener('keydown',message)
// btn.addEventListener('keyup',message)
// btn.removeEventListener('click',message)

// const form=document.querySelector("form")
// form.addEventListener('submit',function(event){
//     event.preventDefault()
//     console.log("Form Submitted")
// })

// const container=document.querySelector('.container')
// const outer=document.querySelector('.outer')
// const button=document.querySelector('button')


// container.addEventListener('click',()=>{console.log("Div")},true)
// outer.addEventListener('click',()=>{console.log("Outer Div")},true)
// button.addEventListener('click',()=>{console.log("Button")},true)


// console.log("New Code")
// debugger
// console.log(b)
// // console.log(a)

// let a=23534
// var b=5674

// console.log(a)
// console.log(b)
// function print(){
//     var c=345
//     console.log(c)
//     console.log("Inside fn")
// }

// print()


// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()

// function infinite(){
//     infinite()
// }
// infinite()

// console.log(a)
// console.log(b)
// // console.log(c)

// var a=345
// let b=5674

// console.log(a)
// console.log(b)

// let total=40

// function calculate(){
//     console.log(total)
//     let total=100
// }
// calculate() 

// console.log("First line")
// setTimeout(()=>(console.log("after 5 secs")),5000)
// console.log("second line")
// console.log("second line")
// console.log("third line")
// console.log("fourth line")

// setTimeout(()=>{
//     console.log("After 3 secs")},2*1000)
// const time=setInterval(() => {console.log("Set interval")    
// }, 1000)

// setInterval(()=>{clearInterval(time)},10000)

// num=1

// const id=setInterval(()=>{
//     if (num===10)clearInterval(id)
//     console.log(num)
//     num+=1
// },1000)

// const name =document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     if (name.value===""){
//         alert("Enter the name!!")
//         return;
//     }
//    const li=document.createElement ('li')
//    const dlt=document.craeteElement('button')
//    dlt.innerText="delete"
//    li.innerText=name.value;
//    dlt.addEventListener("Click",()=>{
//            list.removeChild(li)
//         })
//   list.appendChild(li)
//   li.appendChild(dlt)
    
//   name.value=""
//     })

// console.log("First line")
// setTimeout(()=>(console.log("after 2 secs")),2000)
// console.log("second line")

// function print(num){setTimeout(()=>{
//     console.log("insdie text")
//     num()},2000)
// }

// function callback(){ //callback fn
//     console.log("Inside call")
// }

// print(callback)

//Call back hell
// console.log("starting homework...")
// setTimeout(()=>{
//     console.log("homework done")
//     console.log("starting dinner")
//     setTimeout(()=>{
//         console.log("dinner done..")
//         console.log("getting ready to go out....")
//         setTimeout(()=>{
//             console.log("going to the playground")
//         },1000) //after dinner
        
//     },1500) //dinner time 
// },2000) //homework time 

// function finishHomework(callback) {
//     console.log("Starting homework..")
//     setTimeout(()=>{
//         console.log("Homework done!!")
//         callback()
//     },2000)
// }

// function eatDinner(callback) {
//     console.log("Starting dinner...")
//     setTimeout(() => {
//        console.log("Dinner done!")
//        callback() 
//     },1500)
// }

// function goToPlayground(){
//     console.log("Going to the playground")
// }

// finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground()
//     })
// })


// const p=new Promise((resolve,reject)=>{
//     let done=true
//     setTimeout(() => {
//         if(done){
//             resolve({name:"Anand",age:23})
//         }else{
//             reject("Not done")
//         }
//     },2000);
// })
// // console.log(p)
// p.then((data)=>{
//     console.log(data.name)
//     console.log(data.age)
// }).catch((err)=>{
//     console,log(err)
// }).finally(()=>{
//     console.log("blockedddddd")
// })

// function doHomework(){
//     const p=new Promise((res,rej)=>{
//         let done=true;
//         setTimeout(()=>{
//             if (done){
//                 console.log("Homework completed")
//                 res("Homework done")
//             }else{
//                 rej("homewrok not completed")
//             }
//         },2000)
//     })
//     return p
// }

// function eatDinner(){}

// console.log("First line")
// try{
//     let age=16
//     if(age<18){
//         throw new Error ("You are minor")
//     }
//     // console.log(sample)
// }catch(err){
//     console.log(err)
//     console.log("We got error")
// }
// console.log("Last line")

// function generate(){
//     for (let index = 1; index <=4; index++) {
//         yield index 
//     }
// }
//  const gen=generate()
//  console.log(gen)
//  console.log(gen.next())
//  console.log(gen.next())
//  console.log(gen.next())
//  console.log(gen.next())

 function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
 }

 const first =add(1)
 console.log(first)
 const second=first(2)
 console.log(second)
 const third=second(3)
 console.log(third)

 console.log(add(1)(2)(3))
 
 
