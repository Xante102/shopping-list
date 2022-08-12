import { Component, OnInit } from '@angular/core';
import { Items } from './../models/items.model';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  addList:any;
  id: any;


  constructor(private shoppingListService:ShoppingListService,  private fb:FormBuilder,
    private routes:Router,     private url: ActivatedRoute
    ) { 
      this.addList = fb.group ({
        item_name:['' ],
        category:[''],
        price:[],
        quantity:[]

      })
    }

  ngOnInit(): void {
    this.getItemById();
  }

  getItemById() {
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.shoppingListService.getItemById(this.id).subscribe((data) => {
      this.addList.patchValue(data);
      console.log(data);
    });
  }

  onSubmit() {
    console.log(this.addList.value);
    this.id = this.url.snapshot.params['id'];
    this.shoppingListService
      .updateItem({ this.id, this.addList.value })
      .subscribe((data: any) => {
        console.log(data);
        this.routes.navigate(['/list']);
      });
  }

}