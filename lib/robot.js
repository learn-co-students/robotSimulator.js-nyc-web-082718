class Robot {
	constructor(){
    this.bearing = 'north';
    this.coordinates = [0,0];
  }
  setCoordinates(x,y){
    this.coordinates = [x,y];
  }
  setBearing(bear){
    if(['north','south','east','west'].includes(bear)){
    this.bearing = bear;
    }
    else{
      throw new Error('Invalid Robot Bearing')
    }
  }
  place(placing){
    this.setCoordinates(placing.x,placing.y)
    this.setBearing(placing.direction)
  }
  turnRight(){
    switch(this.bearing){
      case 'north': this.setBearing('east')
      break
      case 'east': this.setBearing('south')
      break
      case 'south': this.setBearing('west')
      break
      case 'west': this.setBearing('north')
      break
    }
  }
  turnLeft(){
    switch(this.bearing){
      case 'north': this.setBearing('west')
      break
      case 'east': this.setBearing('north')
      break
      case 'south': this.setBearing('east')
      break
      case 'west': this.setBearing('south')
      break
    }
  }
  advance(){
    let newplacing = {}
    newplacing.x = this.coordinates[0]
    newplacing.y = this.coordinates[1]
    newplacing.direction = this.bearing
    switch(this.bearing){
      case 'north':
        newplacing.y++
        break
      case 'east':
        newplacing.x++
        break
      case 'south':
        newplacing.y--
        break
      case 'west':
        newplacing.x--
        break
    }
    this.place(newplacing)
  }
  parseLetter(letter){
    switch(letter){
      case 'L':
        return this.turnLeft()
        break
      case 'R':
        return this.turnRight()
        break
      case 'A':
        return this.advance()
        break
    }
  }
  translateInstructions(instructions){
    for(let letter of instructions){
      this.parseLetter(letter)
    }
  }
}
