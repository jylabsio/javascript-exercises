console.log("JavaScript is connected!");


// Your JavaScript goes here!


console.log("Hello, World!");

console.log(23 + 97);

console.log((4 + 6 + 9) / 77);




console.log("7 times 10 = 70");

let a = 10;
console.log(a);
let b = 7 * a;
console.log(b);



let c = 25;
console.log(c);



console.log(" Notes: value > = , assign it > = , log > console.log     ")


const total = 80;
const used = total - 22;
const remainingPercent = used / total;
console.log(remainingPercent)



const score = 150;
const penalty = 35;
const finalScore = score - penalty;
const ratio = finalScore / score;
console.log(ratio)


const capacity = 200;
const filled = capacity - 48;
const fillLevel = filled / capacity;
console.log(fillLevel)




function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
