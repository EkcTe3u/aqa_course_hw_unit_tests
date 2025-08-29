class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }
  get profession() {
    return this._profession;
  }
  get salary() {
    return this.#salary;
  }
  set firstName(value) {
    if (typeof value !== 'string' || value.length < 1) {
      return;
    }
    this._firstName = value;
  }

  set lastName(value) {
    if (typeof value !== 'string' || value.length < 1) {
      return;
    }
    this._lastName = value;
  }

  set profession(value) {
    if (typeof value !== 'string' || value.length < 1) {
      return;
    }
    this._profession = value;
  }
  set salary(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Not a number or value < 0');
    }
    this.#salary = value;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary);
console.log(emp1.getFullName());

class Company {
  #employees;
  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }
  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }

  getEmployees() {
    return [...this.#employees];
  }
  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('invalid employee');
    }
  }
  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
