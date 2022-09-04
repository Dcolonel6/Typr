/**
 * 
 * @param {nodeElement} elem 
 * the main aim of this constructor is to handle all things related to
 * our sentences. it should fetch,breakdown and populate the Dom with
 * the initial sentence to be typed
 */
import { createElement,get } from './utilities.js'

const Sentences = function(elem){
    this._data = []
    this.sentences = ``
    this.paragraphElemnt = elem
}
//breaks down the sentence to be typed into letters and wraps in spans
Sentences.prototype.prepareSentence = function(){
    const sentence = this.sentences
    const arrayOfWords = sentence.split(/\b/)    //split along word boundaries
    let count = 0

    for (let wordIndex = 0; wordIndex < arrayOfWords.length; wordIndex++){
        const word = arrayOfWords[wordIndex]
        //if word is a space
        if(word.length === 1 && /\s+/.test(word)){
            this._data.push({
            "data-word": 'space',
            "data-letter": ' ',
            "data-letterIndxInWord": 0,
            "data-indexInRelationToSentence": count,
            "data-isLetter": false,
            "data-indexOfWord": wordIndex
            })
            count++

        }
        //loop over the word if its not a space ond a single character
        for(let letterIndex = 0; letterIndex < word.length;letterIndex++){
            const letter = word[letterIndex]
            this._data.push({
                "data-word": word,
                "data-letter":letter,
                "data-letterIndxInWord": letterIndex,
                "data-indexInRelationToSentence": count,
                "data-isLetter": true,
                "data-indexOfWord": wordIndex
            })
            count++

        }
    }
    
    
    return this
}
Sentences.prototype.populateDom = function(ele = this.paragraphElemnt){
    console.log(ele)
    this._data.forEach(object => {

        if(object.isLetter){
            const span = createElement('span',object["data-letter"],object)
            ele.append(span)
           
            
        }else{
            const span = createElement('span',object["data-letter"],object)
            ele.append(span)      

        }
    })
    return this

}
//fetchs the sentence to be typed from an api
Sentences.prototype.getSentence = async function(){
    //fetch a sentence using fetch
    const sentences = [
        `
    Mediocrity is a place where people often get stuck and do not know how to escape. 
    This is a mindset that can only be changed with mind renewal. 
    In order to move from this place, one must think differently, get rid of what hasn't worked, 
    connect with those who can give sound direction, design a plan of action and put that plan in motion. 
    Life is way too short to settle for anything less than what we truly want. 
    The only way to embrace your potential is to stop settling. 
    We are only limiting ourselves and wasting our precious time. 
    The moment we begin to settle in the most important roles of our lives is the moment we begin to die a slow death. 
    Excellence is a place where people who refuse to settle for mediocrity live; it is where one reaps from all the hard work sown. 
    It is a journey of continuous progression toward the goals in your life.`,

    `Duis at velit eu est congue elementum. In hac habitasse platea dictumst. 
    Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.
    Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. 
    Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. 
    Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. 
    Donec ut mauris eget massa tempor convallis. 
    Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. 
    Quisque id justo sit amet sapien dignissim vestibulum. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;`
        
    ]
    try{
        const listOfSentences = await get("https://api.mockaroo.com/api/e24070a0?count=10&key=acef1f50")
        
        const sentence = listOfSentences[Math.floor(Math.random() * listOfSentences.length)]["sentence"]
        console.log(sentence)
        this.sentences = sentence 
        return this.sentences
        
    }
    catch(error){
        console.log('something went wrong')
        console.error(error)
        this.sentences = sentences[Math.floor(Math.random() * sentences.length)].trim().replace(/\s+/gm, ' ')
        return this.sentences        

    }  


}
Sentences.prototype.getPrepared = function(){
    return this._data
}

export { Sentences }