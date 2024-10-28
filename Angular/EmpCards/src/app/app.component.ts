import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ListEmployeesComponent } from './employees/employees/list-employees.component';



@Component({

 selector: 'app-root',

 standalone: true,

 imports: [RouterOutlet, ListEmployeesComponent], // Add ListEmployeesComponent here

 templateUrl: './app.component.html',

 styleUrls: ['./app.component.css']

})

export class AppComponent {

 title = 'EMPCards';

}

