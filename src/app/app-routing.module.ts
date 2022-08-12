import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', component: ShoppingListComponent },
  { path: 'list', component: ShoppingListComponent },
  { path: 'add', component: ShoppingAddComponent },
  { path: 'edit/:id', component: ShoppingEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
