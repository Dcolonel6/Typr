/**
 * 
 * @param {nodeElement} elem 
 * the main aim of this constructor is to handle all things related to
 * our sentences. it should fetch,breakdown and populate the Dom with
 * the initial sentence to be typed
 */
import { createElement } from './utilities.js'

const Sentences = function(elem){
    this._data = []
    this.sentences = ``
    this.paragraphElemnt = elem
}
//breaks down the sentence to be typed into letters and wraps in spans
Sentences.prototype.prepareSentence = function(){
    const sentence = this.sentences
    const arrayOfWords = sentence.split(' ')

    let count = 0
    arrayOfWords.forEach((word, index) =>{
        const arrayOfLetters = word.split('')
        arrayOfLetters.forEach((letter,indx) =>{
            this._data.push({
                word: word,
                letter:letter,
                letterIndxInWord: indx,
                indexInRelationToSentence: count,
                isLetter: true,
                indexOfWord: index
            })
            count++
        })
        this._data.push({
            word: 'space',
            letter: ' ',
            letterIndxInWord: 0,
            indexInRelationToSentence: count,
            isLetter: false,
            indexOfWord: index
        })
        count++

    })
    this._data.pop()
    return this
}
Sentences.prototype.populateDom = function(ele = this.paragraphElemnt){
    console.log(ele)
    this._data.forEach(object => {

        if(object.isLetter){
            const span = createElement('span',object.letter,object)
            ele.append(span)
            // ele.innerHTML += `
            // <span  
            //     data-word="${word}" 
            //     data-index-of-word="${indexOfWord}"
            //     data-index-letter-word="${letterIndxInWord}"
            //     data-index-letter-sentence="${indexInRelationToSentence}">${letter}</span>`
            
        }else{
            const span = createElement('span',object.letter,object)
            ele.append(span)
            // ele.innerHTML += `
            // <span  
            //     data-word="${word}" 
            //     data-index-of-word="${indexOfWord}"
            //     data-index-letter-word="${letterIndxInWord}"
            //     data-index-letter-sentence="${indexInRelationToSentence}">${letter}</span>`

        }
    })
    return this

}
//fetchs the sentence to be typed from an api
Sentences.prototype.getSentence = function(){
    //fetch a sentence using fetch
    this.sentences = `Mediocrity is a place where people often get stuck and do not know how to escape. 
    This is a mindset that can only be changed with mind renewal. 
    In order to move from this place, one must think differently, get rid of what hasn't worked, 
    connect with those who can give sound direction, design a plan of action and put that plan in motion. 
    Life is way too short to settle for anything less than what we truly want. 
    The only way to embrace your potential is to stop settling. 
    We are only limiting ourselves and wasting our precious time. 
    The moment we begin to settle in the most important roles of our lives is the moment we begin to die a slow death. 
    Excellence is a place where people who refuse to settle for mediocrity live; it is where one reaps from all the hard work sown. 
    It is a journey of continuous progression toward the goals in your life.`
    return this.sentences
}
Sentences.prototype.getPrepared = function(){
    return this._data
}

export { Sentences }