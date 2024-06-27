console.log("hello");

//moving to quiz #1
const firstDiv=document.getElementById("ContainerId")
const firstBtn=document.getElementById("firstButton")
const nextPage=document.getElementById("section")
function goNext(){
    nextPage.style.display="block"
    firstDiv.style.display="none"
}
firstBtn.addEventListener("click", goNext)

//object of quiz details
const database={
    data:[
        {
            question:" Who created JavaScript?",
            options:{
                a: "Brendan Eich",
                b: "Andres Hejlsberg",
                c: "Guido van Rossum",
                d: "James Gosling"
            },
            correctAnswer: "a"
        },
        {
            question:"What is the output of this code? \nlet name=' ';  \nconsole.log( null ?? 'ionela')",
            options:{
                a: "null",
                b: "undefined",
                c: "ionela",
                d: "NaN"
            },
            correctAnswer: "c"
        },
        {
            question:"How you can print the value of second key? \nconst obj={name:'ionela', \n'is ok': 'wonderful'}",
            options:{
                a: "console.log(obj) ",
                b: "console.log(obj.['is ok'])",
                c: "console.log(obj.key.[is ok])",
                d: "console.log(obj.is ok)"
            },
            correctAnswer: "b"
        }

    ]
}

// creating elements in first container of  section
//1. crating title
const parent1=document.getElementById("demo1")
const firstQuesTitle=document.createElement("h2")
firstQuesTitle.style.fontSize="70px"
firstQuesTitle.innerText="Question #1"
parent1.appendChild(firstQuesTitle)
//2.creating question and inputs

//question
let question1=document.createElement("h4")
question1.innerText=database.data[0].question
question1.style.fontSize="35px"
parent1.appendChild(question1)
//input
let answerA1=document.createElement("input")
let para1=document.createElement("label")
let div1=document.createElement("div")
para1.innerText="a: " + database.data[0].options.a
answerA1.type='radio'
parent1.appendChild(div1)
div1.appendChild(answerA1)
div1.appendChild(para1)

let answerA2=document.createElement("input")
let para2=document.createElement("label")
let div2=document.createElement("div")
para2.innerText="b: " + database.data[0].options.b
answerA2.type='radio'
parent1.appendChild(div2)
div2.appendChild(answerA2)
div2.appendChild(para2)

let answerA3=document.createElement("input")
let para3=document.createElement("label")
let div3=document.createElement("div")
para3.innerText="c: " + database.data[0].options.c
answerA3.type='radio'
parent1.appendChild(div3)
div3.appendChild(answerA3)
div3.appendChild(para3)

let answerA4=document.createElement("input")
let para4=document.createElement("label")
let div4=document.createElement("div")
para4.innerText="d: " + database.data[0].options.d
answerA4.type='radio'
parent1.appendChild(div4)
div4.appendChild(answerA4)
div4.appendChild(para4)

//checking the answer

answerA1.addEventListener("click", ()=>{
        place1.innerText="Correct"
        place1.style.color="#d2d212"
    })
answerA2.addEventListener("click", ()=>{
        place1.innerText="Wrong. Correct answer is: " + `${database.data[0].correctAnswer}`
        place1.style.color="rgb(155, 17, 17)"
    })
answerA3.addEventListener("click", ()=>{
        place1.innerText="Wrong. Correct answer is: " + `${database.data[0].correctAnswer}`
        place1.style.color="rgb(155, 17, 17)"
    })
answerA4.addEventListener("click", ()=>{
        place1.innerText="Wrong. Correct answer is: " + `${database.data[0].correctAnswer}`
        place1.style.color="rgb(155, 17, 17)"
    })


//moving to quiz #2

const FirstDivOfS=document.getElementById("SectionNumber1")
const FirstBtnofQ=document.getElementById("Section1Button")
const nextPage2=document.getElementById("SectionNumber2")
function goNext2(){
    nextPage2.style.display="flex"
    FirstDivOfS.style.display="none"
}
FirstBtnofQ.addEventListener("click", goNext2)


// creating elements in first container of  section
//1. crating title
const parent2=document.getElementById("demo2")
const secondQuesTitle=document.createElement("h2")
secondQuesTitle.style.fontSize="70px"
secondQuesTitle.innerText="Question #2"
parent2.appendChild(secondQuesTitle)

//2.creating question and inputs


//question
let question2=document.createElement("h4")
question2.innerText=database.data[1].question
question2.style.fontSize="35px"
parent2.appendChild(question2)
//input
let answerB1=document.createElement("input")
let paraB1=document.createElement("label")
let div5=document.createElement("div")
paraB1.innerText="a: " + database.data[1].options.a
answerB1.type='radio'
parent2.appendChild(div5)
div5.appendChild(answerB1)
div5.appendChild(paraB1)

let answerB2=document.createElement("input")
let paraB2=document.createElement("label")
let div6=document.createElement("div")
paraB2.innerText="b: " + database.data[1].options.b
answerB2.type='radio'
parent2.appendChild(div6)
div6.appendChild(answerB2)
div6.appendChild(paraB2)

let answerB3=document.createElement("input")
let paraB3=document.createElement("label")
let div7=document.createElement("div")
paraB3.innerText="c: " + database.data[1].options.c
answerB3.type='radio'
parent2.appendChild(div7)
div7.appendChild(answerB3)
div7.appendChild(paraB3)

let answerB4=document.createElement("input")
let paraB4=document.createElement("label")
let div8=document.createElement("div")
paraB4.innerText="d: " + database.data[1].options.d
answerB4.type='radio'
parent2.appendChild(div8)
div8.appendChild(answerB4)
div8.appendChild(paraB4)

//checking the answer

answerB1.addEventListener("click", ()=>{
    place2.innerText="Wrong. Correct answer is: " + `${database.data[1].correctAnswer}`
    place2.style.color="rgb(155, 17, 17)"
})
answerB2.addEventListener("click", ()=>{
    place2.innerText="Wrong. Correct answer is: " +  `${database.data[1].correctAnswer}`
    place2.style.color="rgb(155, 17, 17)"
})
answerB3.addEventListener("click", ()=>{
    place2.innerText="Correct"
    place2.style.color="#d2d212"
})
answerB4.addEventListener("click", ()=>{
    place2.innerText="Wrong. Correct answer is: " + `${database.data[1].correctAnswer}`
    place2.style.color="rrgb(155, 17, 17)"
})



//moving to quiz #3

const thirdDivOfS=document.getElementById("SectionNumber3")
const SecondBtnofQ=document.getElementById("Section2Button")
//const nextPage2=document.getElementById("SectionNumber2")
function goNext3(){
    nextPage2.style.display="none"
    thirdDivOfS.style.display="flex"
}
SecondBtnofQ.addEventListener("click", goNext3)




// creating elements in first container of  section
//1. creating title
const parent3=document.getElementById("demo3")
const thirdQuesTitle=document.createElement("h2")
thirdQuesTitle.style.fontSize="70px"
thirdQuesTitle.innerText="Question #3"
parent3.appendChild(thirdQuesTitle)

//2.creating question and inputs


//question
let question3=document.createElement("h4")
question3.innerText=database.data[1].question
question3.style.fontSize="35px"
parent3.appendChild(question3)
//input
let answerC1=document.createElement("input")
let paraC1=document.createElement("label")
let div9=document.createElement("div")
paraC1.innerText="a: " + database.data[2].options.a
answerC1.type='radio'
parent3.appendChild(div9)
div9.appendChild(answerC1)
div9.appendChild(paraC1)

let answerC2=document.createElement("input")
let paraC2=document.createElement("label")
let div10=document.createElement("div")
paraC2.innerText="b: " + database.data[2].options.b
answerC2.type='radio'
parent3.appendChild(div10)
div10.appendChild(answerC2)
div10.appendChild(paraC2)

let answerC3=document.createElement("input")
let paraC3=document.createElement("label")
let div11=document.createElement("div")
paraC3.innerText="c: " + database.data[2].options.c
answerC3.type='radio'
parent3.appendChild(div11)
div11.appendChild(answerC3)
div11.appendChild(paraC3)

let answerC4=document.createElement("input")
let paraC4=document.createElement("label")
let div12=document.createElement("div")
paraC4.innerText="d: " + database.data[2].options.d
answerC4.type='radio'
parent3.appendChild(div12)
div12.appendChild(answerC4)
div12.appendChild(paraC4)


//checking the answer

answerC1.addEventListener("click", ()=>{
    place3.innerText="Wrong. Correct answer is: " + `${database.data[2].correctAnswer}`
    place3.style.color="rgb(155, 17, 17)"
})
answerC2.addEventListener("click", ()=>{
    place3.innerText="Correct"
    place3.style.color="#d2d212"
})
answerC3.addEventListener("click", ()=>{
    place3.innerText="Wrong. Correct answer is: " + `${database.data[2].correctAnswer}`
    place3.style.color="rgb(155, 17, 17)"
})
answerC4.addEventListener("click", ()=>{
    place3.innerText="Wrong. Correct answer is: " + `${database.data[2].correctAnswer}`
    place3.style.color="rgb(155, 17, 17)"
})


const ThirdBtnofQ=document.getElementById("Section3Button")
function back(){
    thirdDivOfS.style.display="none"
    firstDiv.style.display="flex"
}
ThirdBtnofQ.addEventListener("click", back)