import { Routes } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { AddNewComponent } from './pages/add-new/add-new.component';
import { DetailsComponent } from './pages/details/details.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';

export const routes: Routes = [

  {path: 'list', component: ListComponent },

  {path: 'add-new', component: AddNewComponent },

  {path: 'details', component: DetailsComponent },

  {path: 'update', component: UpdateComponent },

  {path: 'delete', component: DeleteComponent },

  {path: '', redirectTo: '/products', pathMatch: 'full'},

];