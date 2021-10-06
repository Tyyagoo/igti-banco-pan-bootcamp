import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'create', component: ContactCreateComponent },
  { path: 'edit/:id', component: ContactEditComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
