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
    triviaAnswer.innerHTML= fname + ", you are correct"
  }
}

function tandl() {
  let tlAnswer = document.getElementById("truthsandlie")

  //get values from form
  let perilSelected = document.getElementById("peril").checked;
  let glorySelected = document.getElementById("glory").checked;
  let tsunamiSelected = document.getElementById("tsunami").checked;

  //results
  if (perilSelected) {
    tlAnswer.innerHTML = fname + ", this is not the lie"
  }
  else if (glorySelected) {
    tlAnswer.innerHTML = fname + ", this is not the lie"
  }
  else if (tsunamiSelected) {
    tlAnswer.innerHTML = fname + ", yes, this is the lie"
  }
}