const directions = ["north", "south", "east", "west"]

class Robot {
	//your solution here
  constructor (coordinates = [0,0], bearing = "north"){
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x, y){
    return this.coordinates = [x, y]
  }

  setBearing(direction){
    if (directions.indexOf(direction) > -1 ){
       return this.bearing = direction  }
    else{
       throw "Invalid Robot Bearing"}
  }
  place(placement){
    this.coordinates = [placement.x, placement.y]
    this.bearing = placement.direction
  }

  turnRight(){
    if (this.bearing === "north"){
      this.bearing = "east"
    }
    else if (this.bearing === "east") {
      this.bearing = "south"
    }
    else if (this.bearing === "south") {
      this.bearing = "west"
    }
    else if (this.bearing === "west") {
      this.bearing = "north"
    }
  }
  turnLeft(){
    if (this.bearing === "north"){
      this.bearing = "west"
    }
    else if (this.bearing === "east") {
      this.bearing = "north"
    }
    else if (this.bearing === "south") {
      this.bearing = "east"
    }
    else if (this.bearing === "west") {
      this.bearing = "south"
    }
  }
  advance(){
    if (this.bearing === "north"){
      this.coordinates[1] += 1
    }
    else if (this.bearing === "east") {
      this.coordinates[0] += 1
    }
    else if (this.bearing === "south") {
      this.coordinates[1] -= 1
    }
    else if (this.bearing === "west") {
      this.coordinates[0] -= 1
    }
  }
  translateInstructions(instructions){
    let instAry = instructions.split('')
    for (const char of instAry ){
      if (char === "L") {
        this.turnLeft()
      }
      else if (char === "R") {
        this.turnRight()
      }
      else if (char === "A") {
          this.advance()
      }
    }

  }
}
