import { Component, OnInit } from '@angular/core';
import { Items } from './../models/items.model';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-add',
  templateUrl: './shopping-add.component.html',
  styleUrls: ['./shopping-add.component.css']
})
export class ShoppingAddComponent implements OnInit {
  addList:any;


  constructor(private shoppingListService:ShoppingListService,  private fb:FormBuilder,
    private routes:Router) { 
      this.addList = fb.group ({
        item_name:['' ],
        category:[''],
        price:[],
        quantity:[]

      })
    }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log(this.addList.value);
    this.shoppingListService.createItem(this.addList.value).subscribe();
    alert("Successful");
    this.routes.navigate(['/list']);
  }

}