class Clock {
    constructor() {

      // 1. Create a Date object.
      const date = new Date()

      // 2. Store the hours, minutes, and seconds.
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();

      // 3. Call printTime
      this.printTime();

      // 4. Schedule the tick at 1 second intervals.
      setInterval(Clock.prototype._tick.bind(this), 1000);
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      
      if (this.seconds < 10) {
        console.log('0' + `${this.hours}` + ':' + '0' + `${this.minutes}` + ':' + '0' + `${this.seconds}`);
      } else {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
      }
    }
  
    _tick() {
      // 1. Increment the time by one second.
      this.seconds++

      if (this.seconds === 60) {
        this.minutes++
        this.seconds = 0;
      }

      if (this.minutes === 60) {
        this.hours++
        this.minutes = 0;
      }

      if (this.hours === 24) {
        this.minutes = 0;
        this.seconds = 0;
      }

      // 2. Call printTime.
      this.printTime()
    }
}

const clock = new Clock();
