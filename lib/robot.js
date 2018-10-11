class Robot {
	//your solution here
  constructor(coordinates = [0, 0], bearing = 'north') {
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(first, second) {
    this.coordinates[0] = first;
    this.coordinates[1] = second;
  }

  setBearing(direction) {
    const directions = ["north", "south", "east", "west"];
    if (directions.indexOf(direction) >= 0) {
      this.bearing = direction;
    } else
    throw "Invalid Robot Bearing"
  }


  place(placement) {
    this.coordinates[0] = placement.x;
    this.coordinates[1] = placement.y;
    this.bearing = placement.direction

  }

  turnRight() {
    if(this.bearing === 'north') {
      this.bearing = "east"
    } else if (this.bearing === 'east') {
      this.bearing = 'south';
    } else if (this.bearing === 'south') {
      this.bearing = 'west';
    } else if (this.bearing === 'west') {
      this.bearing = 'north';
    }
  }

  turnLeft() {
    if(this.bearing === 'north') {
      this.bearing = "west"
    } else if (this.bearing === 'east') {
      this.bearing = 'north';
    } else if (this.bearing === 'south') {
      this.bearing = 'east';
    } else if (this.bearing === 'west') {
      this.bearing = 'south';
    }
  }

  advance() {
    if(this.bearing === 'north') {
      this.coordinates = [this.coordinates[0], ++this.coordinates[1]]
    } else if (this.bearing === 'east') {
      this.coordinates = [++this.coordinates[0], this.coordinates[1]]
    } else if (this.bearing === 'south') {
      this.coordinates = [this.coordinates[0], --this.coordinates[1]]
    } else if (this.bearing === 'west') {
      this.coordinates = [--this.coordinates[0], this.coordinates[1]]
    }
  }

  translateInstructions(instruction) {
      instruction.split('').forEach(function(move) {
        if (move === 'L') {
          this.turnLeft();
        } else if (move === "R") {
          this.turnRight();
        } else if (move === "A") {
          this.advance();
        }
      }.bind(this))
  }

}
//
// const R2D2 = new Robot();
// // const IronGiant = new Robot();
// // const HAL9000 = new Robot();
// // const Bender = new Robot();
//
// R2D2.place({ x: 0, y: 0, direction: "north" });
// // IronGiant.place({ x: 2, y: -7, direction: "east" });
// // HAL9000.place({ x: 8, y: 4, direction: "south" });
// // Bender.place({ x: -4, y: -4, direction: "west" });
//
// R2D2.translateInstructions("ARA");
// // IronGiant.translateInstructions("RRAAAAALA");
// // HAL9000.translateInstructions("LAAARRRALLLL");
// // Bender.translateInstructions("LAAARRRALLLL");
//
// // let placement = {x: -2, y: 1 , direction: "east"}
