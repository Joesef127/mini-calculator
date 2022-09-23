// fetching from html
const calcInputEl = document.querySelector("#calc-input");
const keypadEl = document.querySelectorAll(".keypad");
const keyValueEl = document.querySelectorAll(".value");
const equals = document.getElementById("equals");
const reset = document.getElementById("reset");
const del = document.getElementById("del");

let calcInput = calcInputEl;
// product = replace("x", "*")

keyValueEl.forEach((keyValue) => {
  keyValue.addEventListener("click", function (e) {
    let value = e.target.textContent;
    calcInputEl.value += value;
  });
});

reset.addEventListener("click", function () {
  calcInputEl.value = null;
});

del.addEventListener("click", function () {
  let clear = calcInputEl.value;

});

equals.addEventListener("click", function () {
  let answer = calcInputEl.value;
  if (answer) {
    calcInputEl.value = eval(answer);
  }
});

// function to set a given theme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between themes
function toggleTheme() {
  if (localStorage.getItem("theme") === "darkMode") {
    setTheme("lightMode");
  } else {
    setTheme("darkMode");
  }
}

// function to set initial theme
(function () {
  if (localStorage.getItem("theme") === "darkMode") {
    setTheme("darkMode");
  } else if (localStorage.getItem("theme") === "lightMode") {
    setTheme("darkMode")
  } else {
    setTheme("lightMode");
  }
});
