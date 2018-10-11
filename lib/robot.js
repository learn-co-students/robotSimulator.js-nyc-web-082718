class Robot {
	constructor() {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(bearing) {
    const directions = ["north", "south", "east", "west"]
    if (directions.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw new Error('Invalid Robot Bearing');
    }
  }

  place(params) {
    this.setCoordinates(params.x, params.y)
    this.setBearing(params.direction)
  }

  turnRight() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'north'
        break;
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'north'
        break;
    }
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++
        break;
      case 'east':
        this.coordinates[0]++
        break;
      case 'south':
        this.coordinates[1]--
        break;
      case 'west':
        this.coordinates[0]--
        break;
    }
  }

  translateInstructions(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      switch (instructions[i]) {
        case "L":
          this.turnLeft()
          break;
        case "R":
          this.turnRight()
          break;
        case "A":
          this.advance()
          break;
      }
    }
  }
}
