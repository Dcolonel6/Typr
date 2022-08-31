document.addEventListener('DOMContentLoaded',init)

function init(e){
    const sentences = document.querySelector('#sentences').textContent
    addSpans(sentences)


}

function addSpans(sentences){
    const listOfWords = sentences.split(" ")
    listOfWords.forEach((words,index) =>{
        const letters = words.split("")
        letters.forEach((letter,idx) => {
            console.log(letter)
        })
    })
}
