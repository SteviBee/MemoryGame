const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// Reset Button - clears all colors and sets start to false:
let resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", function(e) {
  let clearAllDivs = document.querySelectorAll("div");
  for (const div of clearAllDivs) {
    div.removeAttribute("style");    
  }
  let startButton = false;
  let stop = removeEventListener("click", startEvent)
  let stopTimer = clearInterval(startTimer)
  matchesCount = []
  printTimer(0);
  // Enables start button again
  e.target.previousElementSibling.disabled = false
  // Returns - 
  return {
    stop,
    stopTimer,
    startButton,
    matchesCount,
    printResults,
    printTimer
  };
})

// Create match function:
function handleMatch(array) {

  for (const value of array) {
    let div = document.querySelector("#removeMe")
    div.removeAttribute("id");
    div.removeEventListener("click", handleCardClick);
    matchesCount.push(value);
    printResults();
  }
  return counterArr = [];
}

// Print Timer:
function printTimer(time) {
  let timeDisplay = document.querySelector("#timer")
  return timeDisplay.innerText = "Timer: " + time;
}

// Start Button - starts timer, sets start to true, and starts counting
let startEvent = document.querySelector("#start")
startEvent.addEventListener("click", function(e) {
  e.target.disabled = true;

  if (startButton) {
    startTimer();
  } else {
    clearInterval(startTimer)
  }
})

// Create timer function:
let startTimer = function() {  
  let countTime = 0;
  let myTimer = setInterval(function() {
      countTime++
      console.log(countTime); 
      return printTimer(countTime);
  }, 1000);
}

// function startTimer(e) {  
//   e.target.disabled = true;
//   let countTime = 0;
//   let startButton = true;
//   // Create timer function:
//   let myTimer = setInterval(function() {
//     if (startButton === true) {
//       countTime++
//       console.log(countTime); 
//       return printTimer(countTime);
//     } else {
//       clearInterval(myTimer);
//     }
//   }, 1000);
//   return {
//     countTime,
//     startButton,
//     myTimer
//   };
// }

// Record Matches:
let matchesCount = [];
function printResults() {
  let h2 = document.querySelector("h2")
  return h2.innerText = `Matches: ${matchesCount.length / 2}`;
}

// Create match function:
function handleMatch(array) {

  for (const value of array) {
    let div = document.querySelector("#removeMe")
    div.removeAttribute("id");
    div.removeEventListener("click", handleCardClick);
    matchesCount.push(value);
    printResults();
  }
  return counterArr = [];
}

let counterArr = []
function handleCardClick(event) {
  //handel same div selected:
  if (event.target.id) {
    
  } else if (counterArr.length < 2) {
    // Change BR Color from click:
    event.target.style.backgroundColor = event.target.classList.value;
    // Give unique ID:
    event.target.setAttribute("id", "removeMe")
    counterArr.push(event.target.classList.value);
  } 

  // Removes background colors of selected divs after a delay
  if (counterArr.length >= 2) {
    if (counterArr[0] === counterArr[1]) {
      handleMatch(counterArr);
    } else {
      setTimeout(function() {
        for (const item of counterArr) {  
          let div = document.querySelector("#removeMe")
          div.removeAttribute("style"); 
          div.removeAttribute("id");      
        }
        return counterArr = [];
      }, 1000);
    };
  }
};

// when the DOM loads
createDivsForColors(shuffledColors);
window.addEventListener('load', 
  function() { 
    return startButton = true;
  });
printResults();
