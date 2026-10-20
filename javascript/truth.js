let fname = "";

function greet() {
  let greetParagraph = document.getElementById("greet")

  fname= document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let age = document.getElementById("age").value;

  greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname; 
}

function trivia1() {
  let triviaAnswer = document.getElementById("trivia1-answer")

  //get values from form
  let chocolateSelected = document.getElementById("chocolate").checked;
  let tunaSelected = document.getElementById("tuna").checked;
  let honeySelected = document.getElementById("honey").checked

  //give results
  if (chocolateSelected) {
    triviaAnswer.innerHTML = fname + ", you are wrong"
  }
  else if (tunaSelected) {
    triviaAnswer.innerHTML = fname + ", you are wrong"
  }

  else if (honeySelected) {
    trivia1.innerHTML= fname + ", you are correct"
  }
}