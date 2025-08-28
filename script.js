// ================================
// Part 1: Variables & Conditionals (Personalized)
// ================================
function checkAge() {
  // Capture user input
  let age = prompt("Enter your age:");

  // Convert to number
  age = Number(age);

  // Get the user's name (from greeting prompt earlier or default Guest)
  let name = window.username || "Guest";  

  // Conditional logic with Kenyan context
  let result;
  if (age >= 18) {
    result = `Hello ${name}, you are an adult ✅\nIn Kenya, this means you can apply for an ID, vote, and even get a driving license.`;
  } else if (age > 0) {
    result = `Hello ${name}, you are still a minor 🚸\nIn Kenya, you need to be 18+ to apply for an ID and vote.`;
  } else {
    result = "Invalid age entered ❌";
  }

  // Output to the DOM
  document.getElementById("ageResult").innerText = result;

  // Also show personalized yearsUntil18 info
  document.getElementById("adultInfo").innerText = yearsUntil18(name, age);
}

// ================================
// Greeting on page load
// ================================
window.onload = function() {
  let user = prompt("What's your name?");
  window.username = user || "Guest"; // store name globally
  let greeting = greetUser(window.username);
  let greetElement = document.createElement("h3");
  greetElement.innerText = greeting;
  document.body.prepend(greetElement);
};

// ================================ 
// Part 2: Functions (Reusability)
// ================================
function greetUser(name) {
  return `Hello, ${name}! 👋`;
}

// NEW: Personalized yearsUntil18 function
function yearsUntil18(name, age) {
  if (age < 18 && age > 0) {
    return `Hi ${name}, you still have ${18 - age} year(s) until you become an adult 🎓.`;
  } else if (age >= 18) {
    return `Hi ${name}, you are already an adult 🎉!`;
  } else {
    return "";
  }
}

// ================================
// Part 3: Loops
// ================================
function showCountdown() {
  let countdownList = document.getElementById("countdownList");
  countdownList.innerHTML = ""; // Clear list

  // Countdown from 5 using a for loop
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    countdownList.appendChild(li);
  }

  // While loop example (adding "Go!" at the end)
  let done = false;
  while (!done) {
    let li = document.createElement("li");
    li.innerText = "Go! 🚀";
    countdownList.appendChild(li);
    done = true;
  }
}

// ================================
// Part 4: DOM Manipulation
// ================================

// Toggle text visibility
function toggleText() {
  let para = document.getElementById("togglePara");

  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
}

// Background color changer (5 colors)
const colors = ["#f9f9f9", "lightyellow", "lightblue", "lightgreen", "lavender"];
let colorIndex = 0;

document.body.addEventListener("click", function() {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.background = colors[colorIndex];
});
