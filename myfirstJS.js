"use strict";
//Make sure there is no bad syntax (e.g., missing brackets, undeclared variables) in this file
(function () {
  const selectors = {
    message: "#message",
    button: "#myButton",
    counter: "#counter",
  };

  let count = 0;

  function init() {
    const btn = document.querySelector(selectors.button);
    if (btn) btn.addEventListener("click", onButtonClick);

    //initial UI
    showMessage("Ready.");
    updateCounter();
  }

  function onButtonClick() {
    count += 1;
    updateCounter();
    //New UI message after every click
    showMessage(`Button clicked ${count} time${count === 1 ? "" : "s"}.`);
  }

  function updateCounter() {
    const el = document.querySelector(selectors.counter);
    if (el) el.textContent = String(count);
  }

  function showMessage(text) {
    const el = document.querySelector(selectors.message);
    if (el) el.textContent = text;
    else console.log(text);
  }
  //Run the init function on page load and expose some functions to the global scope for testing
  window.myFirstJS = {
    init,
    showMessage,
    //add: (a, b) => a + b,
  };

  document.addEventListener("DOMContentLoaded", init);
})();
