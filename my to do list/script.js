"use strict";

const oneSign = document.querySelector(".one__sign");
const twoSign = document.querySelector(".two__sign");
const threeSign = document.querySelector(".three__sign");
const fourSign = document.querySelector(".four__sign");
const fiveSign = document.querySelector(".five__sign");
const sixSign = document.querySelector(".six__sign");
const oneText = document.querySelector(".one__text");
const twoText = document.querySelector(".two__text");
const threeText = document.querySelector(".three__text");
const fourText = document.querySelector(".four__text");
const fiveText = document.querySelector(".five__text");
const sixText = document.querySelector(".six__text");

const oneSignToggle = function () {
  oneText.classList.toggle("gym");
  oneSign.classList.toggle("green__one");
};

oneSign.addEventListener("click", function () {
  oneSignToggle();
});

const twoSignToggle = function () {
  twoText.classList.toggle("bills");
  twoSign.classList.toggle("green__two");
};

twoSign.addEventListener("click", function () {
  twoSignToggle();
});

const threeSignToggle = function () {
  threeText.classList.toggle("meet");
  threeSign.classList.toggle("green__three");
};

threeSign.addEventListener("click", function () {
  threeSignToggle();
});

const fourSignToggle = function () {
  fourText.classList.toggle("eggs");
  fourSign.classList.toggle("green__four");
};

fourSign.addEventListener("click", function () {
  fourSignToggle();
});

const fiveSignToggle = function () {
  fiveText.classList.toggle("read");
  fiveSign.classList.toggle("green__five");
};

fiveSign.addEventListener("click", function () {
  fiveSignToggle();
});

const sixSignToggle = function () {
  sixText.classList.toggle("office");
  sixSign.classList.toggle("green__six");
};

sixSign.addEventListener("click", function () {
  sixSignToggle();
});
