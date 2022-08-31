const Timer = function(time,ele = document.querySelector('#timer')){
    this.eleTimer = ele
    this.timeAlloted = time || 60
    this.isActive = false
    this.setIntervalId = 0
}
Timer.prototype.startCountDown = function(){
    this.isActive = true
    self = this
    this.setIntervalId = setInterval(function(){
        this.timeAlloted--
        this.eleTimer.textContent = time
        const secondElapsed = new CustomEvent('second',{
            detail:{
                message: 'a second has elapsed',
                time: this.timeAlloted,
                timer: self
            },
            cancelable: true,
            bubbles: true
        })

        this.eleTimer.dispatch(secondElapsed)

    },1000)

}
Timer.prototype.resetTime  = function(){
    this.isActive = false
    this.timeAlloted = time || 60
    clearInterval(this.setIntervalId)
    
    return this
}