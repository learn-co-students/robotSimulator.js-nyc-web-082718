class Robot {
	//your solution here

  constructor() {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(direction){
    const directions = ["north", "east", "south", "west"]
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw 'Invalid Robot Bearing'
    }
  }

  place(hash) {
    this.setCoordinates(hash.x, hash.y)
    this.setBearing(hash.direction)
  }

  turnRight() {
    const directions = ["north", "east", "south", "west"]
    let currentIndex = directions.findIndex(function(element){
      return element === this.bearing
    }.bind(this))
    if (this.bearing === "west"){
      this.setBearing("north")
    } else {
      this.setBearing(directions[currentIndex + 1])
    }
  }

  turnLeft() {
    const directions = ["north", "east", "south", "west"]
    let currentIndex = directions.findIndex(function(element){
      return element === this.bearing
    }.bind(this))
    if (this.bearing === "north"){
      this.setBearing("west")
    } else {
      this.setBearing(directions[currentIndex - 1])
    }
  }

  advance() {
    if (this.bearing === "north") {
      this.setCoordinates(this.coordinates[0], this.coordinates[1] + 1)
    } else if (this.bearing === "south") {
      this.setCoordinates(this.coordinates[0], this.coordinates[1] - 1)
    } else if (this.bearing === "east") {
      this.setCoordinates(this.coordinates[0] + 1, this.coordinates[1])
    } else if (this.bearing === "west") {
      this.setCoordinates(this.coordinates[0] - 1, this.coordinates[1])
    }
  }

  translateInstructions(string) {
    for (let char of string) {
      if (char === "L") {
        this.turnLeft()
      } else if (char === "R") {
        this.turnRight()
      } else if (char === "A"){
        this.advance()
      }
    }

  }

}
