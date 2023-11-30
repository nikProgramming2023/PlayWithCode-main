function Vehicle(speed) {
  this.speed = speed;
  this.moveForward = function () {
    return `Moving forward at ${this.speed}`;
  };
}

const Automobile = new Vehicle(55);
