import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingAddComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
