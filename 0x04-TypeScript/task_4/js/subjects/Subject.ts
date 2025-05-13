/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    // '?' allows 'undefined' | 'Teacher'
    teacher?: Teacher;
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
