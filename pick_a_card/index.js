"use strict";

(() => {
  let card;
  let button;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    card = document.getElementById("card");
    console.log(card);
    button = document.getElementById("pick").addEventListener("click", update);
  }

  function update() {
    const suite = Math.floor(Math.random() * 4); //1,2,3
    const rank = Math.ceil(Math.random() * 13); //1-13

    const suits = ["\u2660", "\u2663", "\u2665", "\u2666"];
    const colors = ["black", "black", "red", "red"];
    console.log(`${suits[suite]} ${rank} colors:${colors[suite]}`);
    card.textContent = `${suits[suite]} ${rank}`;
    card.style.color = `${colors[suite]}`;
  }
})();
