class Robot {
  constructor(coordinates=[0,0], bearing="north") {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x, y){
    this.coordinates = [x, y]
  }

  setBearing(bearing){
    const directions = ['north', 'south', 'east', 'west']
    const foundDirection = directions.find( direction => bearing === direction )
    if (foundDirection) {
      this.bearing = bearing
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  place(directions){
    this.setCoordinates(directions.x, directions.y)
    this.setBearing(directions.direction)
  }

  turnRight() {
    switch (this.bearing) {
      case 'north':
      this.bearing = 'east'
      break
      case 'east':
      this.bearing = 'south'
      break
      case 'south':
      this.bearing = 'west'
      break
      case 'west':
      this.bearing = 'north'
      break
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case 'north':
      this.bearing = 'west'
      break
      case 'east':
      this.bearing = 'north'
      break
      case 'south':
      this.bearing = 'east'
      break
      case 'west':
      this.bearing = 'south'
      break
    }
  }

  advance() {
    let x = this.coordinates[0]
    let y = this.coordinates[1]
    switch (this.bearing) {
      case 'north':
      this.setCoordinates(x, y + 1)
      break
      case 'east':
      this.setCoordinates(x + 1, y)
      break
      case 'south':
      this.setCoordinates(x, y - 1)
      break
      case 'west':
      this.setCoordinates(x - 1, y)
      break
    }
  }

  translateInstructions(instructions) {
    for (const letter of instructions) {
      switch (letter) {
        case 'L':
        this.turnLeft()
        break
        case 'R':
        this.turnRight()
        break
        case 'A':
        this.advance()
        break
      }
    }
  }
}
