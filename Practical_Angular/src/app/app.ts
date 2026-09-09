import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  name: string;
  age: number | null;
  grade: number | null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  students: Student[] = [
    { name: 'Анна', age: 18, grade: 11 },
    { name: 'Максим', age: 17, grade: 7 },
    { name: 'Олег', age: 18, grade: 5 }
  ];

  newStudent: Student = {
    name: '',
    age: null,
    grade: null
  };

  addStudent(): void {
    if (!this.newStudent.name.trim() || this.newStudent.age === null || this.newStudent.grade === null) {
      return;
    }

    this.students.push({
      name: this.newStudent.name,
      age: this.newStudent.age,
      grade: this.newStudent.grade
    });

    this.newStudent = {
      name: '',
      age: null,
      grade: null
    };
  }

  deleteStudent(index: number): void {
    this.students.splice(index, 1);
  }
}