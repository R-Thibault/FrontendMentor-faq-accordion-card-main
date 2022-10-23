const boxShake = document.getElementById("boxShake")

const buttonOne = document.getElementById("buttonOne")
const arrowOne  = document.getElementById("arrowOne")
const answerOne = document.getElementById("answerOne")

const buttonTwo = document.getElementById("buttonTwo")
const arrowTwo  = document.getElementById("arrowTwo")
const answerTwo = document.getElementById("answerTwo")

const buttonThree = document.getElementById("buttonThree")
const arrowThree  = document.getElementById("arrowThree")
const answerThree = document.getElementById("answerThree")

const buttonFour = document.getElementById("buttonFour")
const arrowFour  = document.getElementById("arrowFour")
const answerFour = document.getElementById("answerFour")

const buttonFive = document.getElementById("buttonFive")
const arrowFive  = document.getElementById("arrowFive")
const answerFive = document.getElementById("answerFive")



function boxShaker(){
  const boxShaker = boxShake.classList.add("shake");
  setTimeout(function(){
        boxShake.classList.remove("shake");      
  },
  1000);

  };


buttonOne.addEventListener("click", function(){
  boxShaker();
  arrowOne.classList.toggle("down");
  answerOne.classList.toggle("show");

});

buttonTwo.addEventListener("click", function(){
  boxShaker();
  arrowTwo.classList.toggle("down");
  answerTwo.classList.toggle("show");

});

buttonThree.addEventListener("click", function(){
  boxShaker();
  arrowThree.classList.toggle("down");
  answerThree.classList.toggle("show");

});

buttonFour.addEventListener("click", function(){
  boxShaker();
  arrowFour.classList.toggle("down");
  answerFour.classList.toggle("show");

});

buttonFive.addEventListener("click", function(){
  boxShaker();
  arrowFive.classList.toggle("down");
  answerFive.classList.toggle("show");

});

