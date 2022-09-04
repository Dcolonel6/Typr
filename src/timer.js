const Timer = function (time, ele) {
  this.eleTimer = ele;
  this.timeAlloted = time || 60;
  this.isActive = false;
  this.setIntervalId = 0;
};
Timer.prototype.startCountDown = function () {
  this.isActive = true;
  const time = this.timeAlloted;
  //this doesnt point to Timer object inside the cb
  self = this;
  this.setIntervalId = setInterval(function () {
    //this.eleTimer.textContent = time
    const secondElapsed = new CustomEvent("second", {
      detail: {
        message: "a second has elapsed",
        time: self.timeAlloted,
        timer: self,
      },
      cancelable: true,
      bubbles: true,
    });
    if (self.timeAlloted === 0) {
      self.timeUp(time);
    }

    self.eleTimer.dispatchEvent(secondElapsed);
    self.timeAlloted--;
  }, 1000);
};
Timer.prototype.resetTime = function (time) {
  this.isActive = false;
  this.timeAlloted = time || 60;
  clearInterval(this.setIntervalId);

  return this;
};

//checks to see if time is up and raises a timeup Event
Timer.prototype.timeUp = function (time) {
  const timeIsUp = new CustomEvent("TimeIsUp", {
    detail: {
      message: `${time} has elapsed`,
      timer: self,
      originalTime: time,
    },
    cancelable: true,
    bubbles: true,
  });
  this.resetTime(time);
  this.eleTimer.dispatchEvent(timeIsUp);
  return this;
};
export { Timer };
