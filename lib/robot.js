class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  setCoordinates(x, y){
    this.coordinates = [x, y]
  }

  setBearing(direction){
    const directions = ["north", "south", "east", "west"]
    if (directions.includes(direction)){
      this.bearing = direction
    } else {
      throw 'Invalid Robot Bearing'
    }
  }

  place(placeObject){
    this.setBearing(placeObject.direction)
    this.setCoordinates(placeObject.x, placeObject.y)
  }


  turnRight(){
    if (this.bearing === "north"){
      this.setBearing("east")
    } else if (this.bearing === "east") {
        this.setBearing("south")
    } else if (this.bearing === "south") {
      this.setBearing("west")
    } else {this.setBearing("north") }
  }

  turnLeft(){
    if (this.bearing === "north"){
      this.setBearing("west")
    } else if (this.bearing === "west") {
        this.setBearing("south")
    } else if (this.bearing === "south") {
      this.setBearing("east")
    } else {this.setBearing("north") }
  }

  advance(){
    if (this.bearing === "north"){
      this.setCoordinates(this.coordinates[0], this.coordinates[1]+1)
    } else if (this.bearing === "west") {
        this.setCoordinates(this.coordinates[0]-1, this.coordinates[1])
    } else if (this.bearing === "south") {
      this.setCoordinates(this.coordinates[0], this.coordinates[1]-1)
    } else {this.setCoordinates(this.coordinates[0]+1, this.coordinates[1]) }
  }

  translateInstructions(string){
    for (let letter of string) {
      if (letter === 'R') {
        this.turnRight()
      } else if (letter === "L") {
        this.turnLeft()
      } else if (letter === "A") {
        this.advance()
      }
    }
  }

}
