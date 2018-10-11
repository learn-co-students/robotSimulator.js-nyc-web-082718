class MyError extends Error {}
let robotId = 0

class Robot {
	constructor(bearing = 'north', coordinates = [0,0]) {
    this.bearing = bearing
    this.coordinates = coordinates
    this.id = ++robotId
  }

  setCoordinates(x = 0, y = 0) {
    this.coordinates = [x, y]
    return this.coordinates
  }

  setBearing(bearing) {
    if (bearing === 'north' || bearing === 'east' || bearing === 'south' || bearing === 'west') {
      this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(parameters) {
    this.setCoordinates(parameters.x, parameters.y)
    this.setBearing(parameters.direction)
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.setBearing('east')
    } else if (this.bearing === 'east') {
      this.setBearing('south')
    } else if (this.bearing === 'south') {
      this.setBearing('west')
    } else if (this.bearing === 'west') {
      this.setBearing('north')
    }
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.setBearing('west')
    } else if (this.bearing === 'east') {
      this.setBearing('north')
    } else if (this.bearing === 'south') {
      this.setBearing('east')
    } else if (this.bearing === 'west') {
      this.setBearing('south')
    }
  }

  advance() {
    if (this.bearing === 'north') {
      this.setCoordinates(this.coordinates[0], this.coordinates[1] + 1)
    } else if (this.bearing === 'east') {
      this.setCoordinates(this.coordinates[0] + 1, this.coordinates[1])
    } else if (this.bearing === 'south') {
      this.setCoordinates(this.coordinates[0], this.coordinates[1] - 1)
    } else if (this.bearing === 'west') {
      this.setCoordinates(this.coordinates[0] - 1, this.coordinates[1])
    }
  }

  translateInstructions(commands) {
    let commandsArray = commands.split('')
    for (let command in commandsArray) {
      if (commandsArray[command] === 'L') {
        this.turnLeft()
      } else if (commandsArray[command] === 'R') {
        this.turnRight()
      } else if (commandsArray[command] === 'A') {
        this.advance()
      }
    }
    return this.coordinates
  }
}
