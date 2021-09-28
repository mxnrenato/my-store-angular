const username: string = 'Renato';

const sum = (a: number, b: number) => {
  return a+b;
}

sum(4, 3);

class Person{

  age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const nico = new Person(21, 'Rivera');
