import { Items } from './../models/items.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Items[] = []


  constructor(private shoppingListService:ShoppingListService) { }


  ngOnInit(): void {
    this.getShoppingList();
  }

  getShoppingList() {
    this.shoppingListService.getAllItems().subscribe(results=>{this.items = results.data})
  }

  
  // delete item
  deleteItem(id: string): void {
    this.shoppingListService.deleteItem(id).subscribe({
      next: () => {
        console.log('Deleted item');
      },
      error: () => {
        console.log('Error occured deleting');
      },
      complete: () => {
        this.getShoppingList();
      },
    });
  }

}



