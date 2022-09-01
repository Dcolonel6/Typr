const Timer = function(time, ele){
    this.eleTimer = ele
    this.timeAlloted = time || 60
    this.isActive = false
    this.setIntervalId = 0
}
Timer.prototype.startCountDown = function(){
    this.isActive = true
    self = this
    this.setIntervalId = setInterval(function(){
        self.timeAlloted--
        //this.eleTimer.textContent = time
        const secondElapsed = new CustomEvent('second',{
            detail:{
                message: 'a second has elapsed',
                time: self.timeAlloted,
                timer: self
            },
            cancelable: true,
            bubbles: true
        })
        if(self.timeAlloted === 0){
            self.timeUp()
        }

        self.eleTimer.dispatchEvent(secondElapsed)

    },1000)
    this.setAlarm(this.timeAlloted)
    

}
Timer.prototype.resetTime  = function(){
    this.isActive = false
    this.timeAlloted = time || 60
    clearInterval(this.setIntervalId)
    
    return this
}

//checks to see if time is up and raises a timeup Event
Timer.prototype.timeUp = function(time){    
    const timeIsUp = new CustomEvent('TimeIsUp',{
        detail: {
            message: `${time} has elapsed`,
            timer: self
        },
        cancelable: true,
        bubbles:true
    })
    this.eleTimer.dispatchEvent(timeIsUp)
    this.resetTime()
    return this   
    
}
export { Timer }