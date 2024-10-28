import { Component, OnInit } from '@angular/core';



import { DatePipe } from '@angular/common';

import { CommonModule } from '@angular/common'; // Import CommonModule

import { NgFor } from '@angular/common';
import { Employee } from '../../Models/employee.model';

@Component({

 selector: 'app-list-employees',

 templateUrl: './list-employees.component.html',

 styleUrls: ['./list-employees.component.css'],

 standalone: true,

 imports: [DatePipe,CommonModule,NgFor],// Ensure this is within the @Component decorator

})

export class ListEmployeesComponent implements OnInit {

 employees: Employee[] = [

  {

   id: 1,

   name: 'swethaa',

   gender: 'female',

   email: 'swethaa@example.com',

   phoneNumber: 93456,

   contactPreference: 'Email',

   dateOfBirth: new Date('2002-08-23'), // Ensure this is a Date object

   department: 'cse',

   isActive: false,

   photoPath: 'first.png'

  },

  {

   id: 2,

   name: 'Ravi',

   gender: 'Male',

   email: 'ravi@example.com',

   phoneNumber: 98765,

   contactPreference: 'Phone',

   dateOfBirth: new Date('1995-10-10'),

   department: 'HR',

   isActive: true,

   photoPath: 'second.png'

  },

  {

   id: 3,

   name: 'sankar',

   gender: 'male',

   email: 'sankar@example.com',

   phoneNumber: 87654,

   contactPreference: 'Phone',

   dateOfBirth: new Date('1990-12-15'),

   department: 'Finance',

   isActive: true,

   photoPath: 'third.png'

  }

 ];

 ngOnInit(): void {}

}
