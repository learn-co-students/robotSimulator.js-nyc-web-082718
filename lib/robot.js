class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }

  directions() {
    return ["north", "east", "south", "west"];
  }

  setCoordinates(x, y) {
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }

  setBearing(direction) {
    if (!this.directions().includes(direction)) {
      throw "Invalid Robot Bearing";
    }
    this.bearing = direction;
  }

  place(parameters) {
    this.setCoordinates(parameters.x, parameters.y);
    this.setBearing(parameters.direction);
  }

  turnRight() {
    let i = this.directions().indexOf(this.bearing);
    i = (i + 1) % 4;
    this.bearing = this.directions()[i];
  }

  turnLeft() {
    let i = this.directions().indexOf(this.bearing);
    i = (i - 1) < 0 ? 3 : (i - 1);
    this.bearing = this.directions()[i];
  }

  advance() {
    switch(this.bearing) {
      case 'north':
        this.coordinates[1] += 1;
        break;
      case 'east':
        this.coordinates[0] += 1;
        break;
      case 'south':
        this.coordinates[1] -= 1;
        break;
      case 'west':
        this.coordinates[0] -= 1;
        break;
    }
  }

  translateInstructions(instructions) {
    const steps = instructions.split("");
    steps.forEach(function(step) {
      switch(step) {
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        case "A":
          this.advance();
          break;
      }
    }.bind(this));
  }

} // end class Robot
