import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  // Define the employee object with the necessary properties
  employee = {
    name: '',
    position: '',
    email: '',
    phone: '',
    salary: 0,
    department: ''
  };

  constructor() {
    // You may want to initialize the employee object with existing values
    // For example, by fetching from a service
  }

  // Method to handle the cancel action
  cancel() {
    // Logic for canceling the update (e.g., navigate away, clear fields, etc.)
    console.log('Update cancelled');
    // You can implement navigation or reset functionality here
  }

  // You might also have a method to handle the form submission
  updateEmployee() {
    // Logic to update the employee details (e.g., call a service)
    console.log('Employee updated:', this.employee);
  }
}
