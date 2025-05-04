// task 1: teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [moreKeys: string]: any;
}

// task 2: directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// task 3: interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
// return like: ("John", "Doe") -> 'J. Doe'
const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName[0]}. ${lastName}`;

// task 4: StudentClass interface
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
// StudentClass constructor interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
// class StudentClass
class StudentClass implements StudentClassInterface {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}
  workOnHomework() {
    return "Currently working";
  }
  displayName() {
    return this.firstName;
  }
}
