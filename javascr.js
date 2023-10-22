"use strict";
const typer = function () {
  const textElement = document.querySelector(".typing-text");
  const highlightText = textElement.firstElementChild.textContent;
  console.log(highlightText);

  // Set the text color using style.color
  // highlightText.style.color = "blue";
  const textBeforeHighlight = "Hey, I am ";
  const textAfterHighlight = " A Front End Web Developer!";
  const coloredHighlightText = highlightText;

  // Compose the text with the highlighted part
  const textToType = `${textBeforeHighlight}${coloredHighlightText} ${textAfterHighlight}`;

  // textElement.innerHTML = textBeforeHighlight; // Set the initial content

  let currentIndex = 0;

  function typeText() {
    if (currentIndex <= textToType.length) {
      textElement.innerHTML =
        textBeforeHighlight + textToType.substring(0, currentIndex);
      currentIndex++;
      setTimeout(typeText, 100);
    }
  }

  // Start typing after the content is loaded
  typeText();
};

document.addEventListener("DOMContentLoaded", typer());

// document.addEventListener("DOMContentLoaded", function () {
//   const textElement = document.querySelector(".typing-text");
//   const highlightText = document.querySelector(".highlight-text");
//   const textHighlighted = highlightText.textContent;
//   textHighlighted.style.Color = "#430443E9";

//   const textToType = `Hey, I am ${textHighlighted} A Front End Web Developer!`;

//   console.log(textToType);
//   let currentIndex = 0;

//   function typeText() {
//     if (currentIndex < textToType.length) {
//       textElement.innerHTML += textToType.charAt(currentIndex);
//       currentIndex++;
//       setTimeout(typeText, 100);
//     }
//   }
//   typeText();
// });
// Start typing
// addEventListener("click", function () {
//   document.querySelector("#list").style.borderbottom =
//     "4px solid  rgba(178, 21, 178, 0.919)";
// });
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".smooth-scroll");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".list-items");
const smallScreenMediaQuery = window.matchMedia("(max-width : 810px)");

/* Toggle mobile menu */

function toggleMenu() {
  if (menu.classList.contains("not-visible")) {
    menu.classList.remove("not-visible");
    toggle.querySelector(
      "a"
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>`;
  } else {
    menu.classList.add("not-visible");
    toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
  }
}

toggle.addEventListener("click", toggleMenu, false);

// console.log("function executed");

// const container = document.querySelector(".container");
// const contents = document.querySelectorAll(".content");

// // Initialize a variable to keep track of the total height
// let totalHeight = 0;

// // Calculate the total height by adding the height of each child element
// contents.forEach((content) => {
//   totalHeight += content.clientHeight; // You can also use offsetHeight for borders and padding
// });

// // Set the container's height to the total height
// container.style.height = `${totalHeight}px`;
