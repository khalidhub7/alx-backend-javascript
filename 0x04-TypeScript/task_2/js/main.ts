namespace Interfaces {
  export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  // functions interfaces
  export interface CreateEmployeeInterface {
    (arg: string | number): Director | Teacher;
  }
  export interface IsDirectorInterface {
    (arg: any): boolean;
  }
  export interface executeWorkInterface {
    (arg: Teacher | Director): string;
  }
  type Subjects = "Math" | "History";
  export interface teachClassInterface {
    (arg: Subjects): string;
  }
}

// director class
class Director implements Interfaces.DirectorInterface {
  constructor() {}
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

// teacher class
class Teacher implements Interfaces.TeacherInterface {
  constructor() {}
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

// createEmployee function
const createEmployee: Interfaces.CreateEmployeeInterface = (salary) =>
  typeof salary === "number" && salary < 500 ? new Teacher() : new Director();

// isdirector function
const isDirector: Interfaces.IsDirectorInterface = (employee) =>
  employee instanceof Director;

// executeWork function
const executeWork: Interfaces.executeWorkInterface = (employee) => {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  }
  if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
};

// teachClass function
const teachClass: Interfaces.teachClassInterface = (todayClass) =>
  `Teaching ${todayClass}`;
