/***
 * contains all the event handlers callbacks
 */

import { App } from "./app.js";
import { Timer } from "./timer.js";
import { findWordRecords } from "./utilities.js";

const app = new App();
const paragraphEle = document.querySelector("#sentences");
const timeElement = document.querySelector("#timer");
const time = location.host.indexOf('localhost') > -1 ? 15 : 60
const timer = new Timer(time, timeElement);

//handler for DomContentLoaded
function init(e) {
  app.initialize();
}

function tyPingProcessor(event){
    const { target } = event;
    const sentenceTyped = target.value.trim();
    const listOfWordsTyped = sentenceTyped.split(/\b/g);
    const sentenceToBeTyped = app.sentenceToBeTyped;
    const arrayOfWords = sentenceToBeTyped
      .slice(0, sentenceTyped.length)
      .split(/\b/);
    
  
    arrayOfWords.forEach((word, index) => {
      const wordTyped = listOfWordsTyped[index];
      const wordData = findWordRecords(app.preparedSentenceToBeTyped, {
        indexOfWord: index,
        word: word,
      });
  
      wordData.forEach((letterObject, indx) => {
        const span = paragraphEle.querySelector(
          `span[data-indexInRelationToSentence="${letterObject["data-indexInRelationToSentence"]}"]`
        );
  
        if (wordTyped[indx] && letterObject["data-letter"] === wordTyped[indx]) {
          span.classList.remove("text-danger");
          span.classList.add("text-success");
        } else {
          span.classList.remove("text-success");
          span.classList.add("text-danger");
        }
      });
    });

}
//handler for KeyPress
function onKeyUp(event) {
  if (!timer.isActive) {
    timer.startCountDown();
  }
  tyPingProcessor(event)


}

function onSecondElapsed(event) {
  const { target, detail } = event;
  target.querySelector("h2").textContent = detail.time;
}
function onTimeIsUp(event) {
  //over ridden this to point to the text area element
  const { target, detail } = event;
  const results = document.querySelector("#column-results");
  const rightAttempt = document.querySelectorAll(".text-success").length;
  const wrongAttempt = document.querySelectorAll(".text-danger").length;
  const btnSubmit = document.querySelector("#submit");
  const totalAttempted = wrongAttempt + rightAttempt;
  const accuracy = (rightAttempt / totalAttempted) * 100;

  this.setAttribute("disabled", true);
  target.querySelector("h2").textContent = detail.timer.timeAlloted;
  btnSubmit.setAttribute("disable", true);

  results.querySelector(
    "#results-content"
  ).innerHTML = `Your score was ${Math.floor(
    accuracy
  )} %<br/>Had ${wrongAttempt} typos <br/>Typed ${rightAttempt} words`;

  results.classList.remove("hide");
}
function onSubmit(event){
    event.preventDefault()
    const { target } = event
    const textArea = target['type-area']
    tyPingProcessor({'target': textArea})
    timer.timeUp(time)
    target.reset()
}

export { init, onKeyUp, onSecondElapsed, onTimeIsUp, onSubmit };

//
