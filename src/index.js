import { init, onKeyUp,onSecondElapsed,onTimeIsUp } from './eventHandlers.js'

const textArea = document.querySelector('#type-area')
const timerElement = document.querySelector('#timer')



document.addEventListener('DOMContentLoaded',init)
textArea.addEventListener('keyup',onKeyUp)
timerElement.addEventListener('second',onSecondElapsed)
timerElement.addEventListener('TimeIsUp',onTimeIsUp.bind(textArea))




