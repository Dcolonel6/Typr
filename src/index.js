import { init, onKeyUp,onSecondElapsed } from './eventHandlers.js'

const textArea = document.querySelector('#type-area')
const timerElement = document.querySelector('#timer')



document.addEventListener('DOMContentLoaded',init)
textArea.addEventListener('keyup',onKeyUp)
timerElement.addEventListener('second',onSecondElapsed)




