/***
 * contains all the event handlers callbacks
 */

import { App } from './app.js'
import { Timer } from './timer.js'
import { findWordRecords } from './utilities.js'

const app = new App()
const paragraphEle = document.querySelector('#sentences')
const timeElement = document.querySelector('#timer')
const timer = new Timer(15,timeElement)
console.log(timer, timeElement)




//handler for DomContentLoaded
function init(e){    
    app.initialize()

}

//handler for KeyPress
function onKeyUp(event){
    if(!timer.isActive){
        timer.startCountDown()
    }
    const { target } = event
    const sentenceTyped = target.value
    const listOfWordsTyped = sentenceTyped.split(' ')
    console.log(sentenceTyped)

    //check if we have collected any data for this typing session.If we havent start count down
    const sentenceToBeTyped = app.sentenceToBeTyped
    const arrayOfWords = sentenceToBeTyped.split(' ').slice(0,sentenceTyped.length)
    // arrayOfWords.forEach((word,index) => {
    //     const wordTyped = listOfWordsTyped[index]
    //     const wordData = findWordRecords(app.preparedSentenceToBeTyped,{'indexOfWord':index}) 
               
    //     wordData.forEach((letterObject,indx) => {
                      
    //         const span = paragraphEle.querySelector(`span[data-indexInRelationToSentence="${letterObject['data-indexInRelationToSentence']}"]`)
            
    //         if(letterObject["data-letter"] === wordTyped[indx]){
                
    //             span.classList.remove('text-danger')
    //             span.classList.add('text-success')

    //         }else{
    //             span.classList.remove('text-success')
    //             span.classList.add('text-danger')

    //         }
    //     })
    // })

}

function onSecondElapsed(event){
    const { target,detail } = event
    target.querySelector('h2').textContent = detail.time
    
}
function onTimeIsUp(event){
    //over ridden this to point to the text area element
    const { target, detail} = event
    this.setAttribute('disabled',true)
    target.querySelector('h2').textContent = detail.timer.timeAlloted
    

}

export { init, onKeyUp,onSecondElapsed,onTimeIsUp }