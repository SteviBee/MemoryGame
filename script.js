const gameContainer = document.getElementById("game");

// Make random number between 1-30:
let numColors;
function randomEven() {
  numColors = (Math.floor(Math.random() * 30));
  if (numColors > 0) {
    return numColors = (numColors + (numColors % 2))
  } else {
    return numColors = 10;
  }  
}
randomEven();

// Making Random Colors with pairs
let colorArray = []
function randomColors() {
  for (let i = 0; i < numColors; i++) {
    let r = (Math.floor(Math.random() * 256));
    let g = (Math.floor(Math.random() * 256));
    let b = (Math.floor(Math.random() * 256));
    colorArray.push(`rgb(${r},${g},${b})`)
    colorArray.push(`rgb(${r},${g},${b})`)
  }
}
randomColors();

// let COLORS = [
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple",
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple"
// ];

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

let shuffledColors = shuffle(colorArray);

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
  // Clear all background colors on all divs
  let clearAllDivs = document.querySelectorAll("div");
  for (const div of clearAllDivs) {
    div.removeAttribute("style");    
  }

  // Reset timer, reset match amount, ableToStart
  matchesCount = []
  printTimer(0);
  printResults();
  ableToStart = false;

  // Enables start button again
  e.target.previousElementSibling.disabled = false
  // Question - I guess i don't need to return anything as i am invoking fns or reseting things above
  // RON - need to explietly call the stop timer button on another EVENT 
  return {
    // stop,
    // matchesCount
    // printResults,
    // printTimer
  };
})


// 2nd Reset Button - Stop Timer:
resetButton.addEventListener("click", function(e) {
  return  clearInterval(myTimer) 
})

// Create match function:
function handleMatch(array) {

  for (const value of array) {
    let div = document.querySelector("#removeMe")
    div.removeAttribute("id");
    // div.removeEventListener("click", handleCardClick);
    matchesCount.push(value);
    printResults();

  }
  winActions();
  return counterArr = [];
}

// Print Timer:
let winningTime;
function printTimer(time) {
  let timeDisplay = document.querySelector("#timer")
  winningTime = time;
  return timeDisplay.innerText = "Timer: " + time;
}

let ableToStart;
// Start Button - starts timer, sets start to true, and starts counting
let startEvent = document.querySelector("#start")
startEvent.addEventListener("click", function(e) {
  e.target.disabled = true;
  ableToStart = true
  return startTimer();
})
let myTimer;
// Create timer function:
let startTimer = function() {  
  let countTime = 0;
  myTimer = setInterval(function() {
      countTime++
      return printTimer(countTime);
  }, 1000);
}

// Record Matches:
let matchesCount = [];
function printResults() {
  let h2 = document.querySelector("h2")
  return h2.innerText = `Matches: ${matchesCount.length / 2}`;
}

let counterArr = []
function handleCardClick(event) {
  // disable if start button not pressed:
  if (ableToStart) { 

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
  }
};

// Creat a win condition:
let winningMatches;
function winActions() {
  setTimeout(function () {

    if (matchesCount.length === colorArray.length) {
      winningMatches = matchesCount.length / 2;
      clearInterval(myTimer) 
      // let timeDisplay = document.querySelector("#timer")
      console.log("the winning time is: ", winningTime)
      alert("You Won! Press reset to try to beat your high score")
      localStorage.setItem("winnersTime", winningTime);
      localStorage.setItem("winnersMatches", winningMatches);
      winDisplay();
      }
    }, 200)
  };

function winDisplay() {
  let display = document.querySelector("#winDisplay")
  winTime = localStorage.getItem("winnersTime")
  winMatch = (localStorage.getItem("winnersMatches"))
  if (winTime === null) {
    
  } else {
  display.innerText = `Current best time is ${winTime} seconds for ${winMatch} matches`;
  }
}




// when the DOM loads
createDivsForColors(shuffledColors);
// window.addEventListener('load', 
//   function() { 
//     return startButton = true;
//   });
printResults();
