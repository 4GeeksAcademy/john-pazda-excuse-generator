/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const subjects = ["Dog", "Brother", "Cat", "pet Tiger", "Teacher", "Boss"];

  const verbs = ["ate", "destroyed", "lost", "threw away", "forgot"];

  const possessions = ["homework", "car", "shoes", "shirt", "computer"];

  const times = [
    "yesterday",
    "last week",
    "this morning",
    "last night",
    "on my birthday",
    "on Christmas"
  ];

  const randomSubjectsIndex = Math.floor(Math.random() * subjects.length);
  const randomVerbsIndex = Math.floor(Math.random() * verbs.length);
  const randomPossessionsIndex = Math.floor(Math.random() * possessions.length);
  const randomTimesIndex = Math.floor(Math.random() * times.length);

  const pageHeading = document.querySelector("#header");
  console.log(pageHeading);

  pageHeading.textContent = `My ${subjects[randomSubjectsIndex]} ${verbs[randomVerbsIndex]} my ${possessions[randomPossessionsIndex]} ${times[randomTimesIndex]}`;
};
