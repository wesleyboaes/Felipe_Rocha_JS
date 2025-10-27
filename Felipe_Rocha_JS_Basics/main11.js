class Animal {
  constructor(name) {
    this.name = name;
  }

  noise() {
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log("Au au au au au");
  }
}

const lion = new Animal("Scar");

const caramelo = new Dog("Caramelo");

lion.noise();
caramelo.noise();
caramelo.bark();
