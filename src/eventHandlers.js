/***
 * contains all the event handlers callbacks
 */

 import { App } from './app.js'


 
//handler for DomContentLoaded
 function init(e){
    const app = new App()
    app.initialize()

}

//handler for KeyPress
function onKeyPress(event){
    const { target } = event
    console.log(target)
}

export { init, onKeyPress }