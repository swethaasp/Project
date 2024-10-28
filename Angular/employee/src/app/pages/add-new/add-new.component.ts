import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
})
export class AddNewComponent {
  employee = {
    name: '',
    email: '',
    position: '',
    salary: 0,
  };

  onSubmit() {
    console.log('Employee Added:', this.employee);
    // Add logic to handle the submitted employee data
  }
}
