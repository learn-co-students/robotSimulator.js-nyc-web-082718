const directions = ['north', 'south', 'east', 'west']

class Robot {
 constructor (coordinates = [0,0], bearing = 'north'){
   this.coordinates = coordinates
   this.bearing = bearing
 }

 setCoordinates(x, y) {
   return this.coordinates = [x, y]
 }

 setBearing(direction) {
   if (directions.indexOf(direction) > -1) {
    return this.bearing = direction
  } else {
    throw "Invalid Robot Bearing"
  }
 }

 place(placement) {
   this.coordinates = [placement.x, placement.y]
   this.bearing = placement.direction
 }

 turnRight() {
   if (this.bearing === 'north') {
     return this.bearing = 'east'
   }
   if (this.bearing === 'east') {
     return this.bearing = 'south'
   }
   if (this.bearing === 'south') {
     return this.bearing = 'west'
   }
   if (this.bearing === 'west') {
     return this.bearing = 'north'
   }
 }

 turnLeft() {
   if (this.bearing === 'north') {
     return this.bearing = 'west'
   }
   if (this.bearing === 'west') {
     return this.bearing = 'south'
   }
   if (this.bearing === 'south') {
     return this.bearing = 'east'
   }
   if (this.bearing === 'east') {
     return this.bearing = 'north'
   }
 }

 advance() {
   if (this.bearing === 'north') {
     return this.coordinates[1] += 1
   }
   if (this.bearing === 'west') {
     return this.coordinates[0] -= 1
   }
   if (this.bearing === 'south') {
     return this.coordinates[1] -= 1
   }
   if (this.bearing === 'east') {
     return this.coordinates[0] += 1
   }
 }

 translateInstructions(instructions) {
   let instArr = instructions.split('')
   for (const char of instArr) {
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

} //end of class
