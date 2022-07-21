"use strict";
const DrumsBtn = document.querySelectorAll(".key");

const play = function (e) {
  DrumsBtn.forEach((key) => {
    if (e.key === key.children[0].innerHTML.toLocaleLowerCase()) {
      key.classList.toggle("playing");
      const drumsSounds = document.querySelector(
        `audio[data-key="${key.dataset.key}"]`
      );
      drumsSounds.currentTime = 0; //  as reminder so we can play the soudn as we holdpress it
      drumsSounds.play();
    }
  });
};
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
DrumsBtn.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);

document.addEventListener("keypress", play);
