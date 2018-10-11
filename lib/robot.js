const directions = ["north", "east", "south", "west"]

class Robot {
  constructor(bearing, coordinates) {
    this.bearing = "north"
    this.coordinates = [0, 0]
  }
	//your solution here
  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(bearing) {
    if (directions.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw("Invalid Robot Bearing")
    }
  }

  place({x, y, direction}) {
    this.coordinates = [x, y]
    this.setBearing(direction)
  }

  turnRight(bearing) {
    if (this.bearing === "north") {
      this.setBearing("east")
    } else if (this.bearing === "east") {
        this.setBearing("south")
    } else if (this.bearing === "south") {
        this.setBearing("west")
    } else if (this.bearing === "west") {
        this.setBearing("north")
    }
  }

  turnLeft() {
    let oldBearing = directions.indexOf(this.bearing)
    if (oldBearing === 0) {
      let newBearing = 3
      this.setBearing(directions[newBearing])
    } else {
        this.setBearing(directions[oldBearing - 1])
    }
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1] += 1
    } else if (this.bearing === "east") {
      this.coordinates[0] += 1
    } else if (this.bearing === "south") {
      this.coordinates[1] -= 1
    } else if (this.bearing === "west") {
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(instructions) {

    if (instructions === "L") {
      return this.turnLeft()
    }
    else if (instructions === "R") {
      return this.turnRight()
    }
    else if (instructions === "A") {
      return this.advance()
    }
    else
      for (let i = 0; i < instructions.length; i++) {
        this.translateInstructions(instructions[i])
      }

  } //end of function


} //end of class
