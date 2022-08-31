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

//checks to see if time is up and raises a timeup Event
Timer.prototype.setAlarm = function(time){
    self = this
    const timeIsUp = new CustomEvent('TimeIsUp',{
        detail: {
            message: `${time} has elapsed`,
            timer: self
        },
        cancelable: true,
        bubbles:true
    })
    this.setTimeoutId = setTimeout(function(){
        this.eleTimer.dispatch(timeIsUp)
        this.resetTime()

    },this.timeAlloted * 1000)
    
}