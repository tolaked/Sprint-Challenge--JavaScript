// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMaker {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    console.log(this.length * this.width * this.height);
  }

  surfaceArea() {
    console.log(
      2 *
        (this.length * this.width +
          this.length * this.height +
          this.width * this.height)
    );
  }
}

class cubetype extends CuboidMaker {
  constructor(length, width, height) {
    super(length, width, height);
  }
}

const cuboid = new cubetype(4, 5, 5);
cuboid.volume();
cuboid.surfaceArea();

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class cubes extends CuboidMaker {
  constructor(length, width, height) {
    super(length, width, height);
  }

  cubevolume() {
    console.log(Math.pow(this.height, 3));
  }

  surfaceArea() {
    console.log(6 * Math.pow(this.height, 2));
  }
}
const cube = new cubes(4, 8, 7);
cube.surfaceArea();
cube.cubevolume();
