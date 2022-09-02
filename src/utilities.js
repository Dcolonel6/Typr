//this module will contain helper functions
// import { _ } from 'underscore'


function createElement(tagName, textContent, attributes = {}) {
    const element = document.createElement(tagName);
    if (Object.keys(attributes).length || textContent) {
      return updateElement(element, textContent, attributes);
    }
    return element;
}

function updateElement(element, text = "", attribute = {}) {
    if (text.length) {
      element.textContent = text;
    }
    for (const attr in attribute) {
      element.setAttribute(attr, attribute[attr]);
    }
    return element;
}

function findWordRecords(list, queryObject){
  const findLetterObj = findByPosition(list,queryObject)
  return findTheWholeWordCollection(list, findLetterObj)
  
  
}
//finds using binary search
function findByPosition(list, queryObject){
  const wordIndex =  queryObject['indexOfWord']
  const wordToSearch = queryObject['word'] 
  let lastIndex = list.length -1
  let firstIndex = 0  
  let count = 0
  while(firstIndex < lastIndex){   
    
    let mid = Math.floor((firstIndex + lastIndex) / 2)
    let middleIndexWord = list[mid]['data-indexOfWord']
    if(middleIndexWord < wordIndex){
      if(mid == list.length - 1){
        break;
      }
      firstIndex = mid + 1
    }else if(list[mid]['data-indexOfWord'] > wordIndex){
      lastIndex = mid - 1
    }
    else{
      
      return list[mid]
    }   

  }  
  return {}
}
//slice the data using our find element and returns the whole word
function findTheWholeWordCollection(list, letterObject){
  if(Object.keys(letterObject).length > 0){
    const indexOfLetterInWord = letterObject['data-letterIndxInWord']
    const indexOfLetterInSentence = letterObject["data-indexInRelationToSentence"]
    const lengthOfWord = letterObject["data-word"].length
    const start = indexOfLetterInSentence - indexOfLetterInWord
    const end = start + lengthOfWord
    return list.slice(start,end)
  }
  return []
  
}


export { createElement, findWordRecords}