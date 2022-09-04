import { init, onKeyUp,onSecondElapsed,onTimeIsUp, onSubmit } from './eventHandlers.js'

const textArea = document.querySelector('#type-area')
const timerElement = document.querySelector('#timer')
const form = document.querySelector('#form')



document.addEventListener('DOMContentLoaded',init)
textArea.addEventListener('keyup',onKeyUp)
timerElement.addEventListener('second',onSecondElapsed)
timerElement.addEventListener('TimeIsUp',onTimeIsUp.bind(textArea))
form.addEventListener('submit', onSubmit)




