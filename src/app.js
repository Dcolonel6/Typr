import { Sentences } from "./sentences"

/***
 * this module is meant to take care of the initializing needs of the app
 * these are:
 * call sentence.getSentence() to fetch the sentence that needs to be typed.
 * call sentence.getData() to prepare our sentences and populate the dom with prepared sentence
 * disable copy paste on the textarea
 */
const App = function(){
    this.sentenceToBeTyped =''
    this.preparedSentenceToBeTyped = []
    this._textArea = document.querySelector("#type-area")

}
App.prototype.initialize = function(){
    const paragraphElem = document.querySelector('#sentences')
    const sentence = new Sentences(paragraphElem)
    this.sentenceToBeTyped = sentence.getSentence()
    sentence.getData().populateDom()
    this.preparedSentenceToBeTyped = sentence.getPrepared()
    this._textArea.addEventListener('paste',event => event.preventDefault())
    
}