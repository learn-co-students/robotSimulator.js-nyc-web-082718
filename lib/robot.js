const directions = ['north', 'south', 'east', 'west']

class Robot {
  constructor(bearing, coordinates) {
    this.bearing = 'north'
    this.coordinates = [0, 0]
  }
  setCoordinates(x, y) {
    this.coordinates = [x ,y]
  }
  setBearing(bearing) {
    if (directions.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw('Invalid Robot Bearing')
    }
  }
  place({x, y, direction}) {
    this.coordinates = [x, y]
    this.setBearing(direction)
  }
  turnRight() {
    switch (this.bearing) {
      case "north":
        this.setBearing("east");
        break;
      case "south":
        this.setBearing("west");
        break;
      case "east":
        this.setBearing("south");
        break;
      case "west":
        this.setBearing("north");
        break;
      default:
        break;
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case "north":
        this.setBearing("west");
        break;
      case "south":
        this.setBearing("east");
        break;
      case "east":
        this.setBearing("north");
        break;
      case "west":
        this.setBearing("south");
        break;
      default:
        break;
    }
  }
  advance() {
  switch (this.bearing) {
    case "north":
      this.coordinates[1] += 1;
      break;
    case "south":
      this.coordinates[1] -= 1;
      break;
    case "east":
      this.coordinates[0] += 1;
      break;
    case "west":
      this.coordinates[0] -= 1;
      break;
    default:
      break;
  }
}

translateInstructions(instructions) {
   instructions.split("").forEach(instruction => {
     switch (instruction) {
       case "L":
         this.turnLeft();
         break;
       case "R":
         this.turnRight();
         break;
       case "A":
         this.advance();
         break;
       default:
         break;
     }
   });
 }
} //end of class
