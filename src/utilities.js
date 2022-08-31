//this module will contain helper functions
import { _ } from 'underscore'


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

function findWordRecords(list,attrib){
  return _.where(list,attrib)

}

export { createElement, findWordRecords}