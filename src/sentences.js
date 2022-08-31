/**
 * 
 * @param {nodeElement} elem 
 * the main aim of this constructor is to handle all things related to
 * our sentences. it should fetch,breakdown and populate the Dom with
 * the initial sentence to be typed
 */

const Sentences = function(elem){
    this._data = []
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
    this.paragraphElemnt = elem
}
//breaks down the sentence to be typed into letters and wraps in spans
Sentences.prototype.getData() = function(){
    const sentence = this.sentence
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
    return this_data
}
Sentences.prototype.populateDom = function(ele){
    this._data.forEach(({word,letter,letterIndxInWord,indexInRelationToSentence,isLetter,indexOfWord}) => {

        if(isLetter){
            ele.innerHTML = `
            <span  
                data-word="${word}" 
                data-index-of-word="${indexOfWord}"
                data-index-letter-word="${letterIndxInWord}"
                data-index-letter-sentence="${indexInRelationToSentence}">
                ${letter}            
            </span>`
        }else{
            ele.innerHTML = `
            <span  
                data-word="${word}" 
                data-index-of-word="${indexOfWord}"
                data-index-letter-word="${letterIndxInWord}"
                data-index-letter-sentence="${indexInRelationToSentence}">
                ${letter}            
            </span>`

        }
    })
    return this

}
Sentences.prototype.getSentence = function(){
    //fetch a sentence using fetch
    return this.sentences
}

