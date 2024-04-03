import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../Shared/Models/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})


  export class TagsComponent implements OnInit {

    @Input()
    foodPageTags?:string[];
  
    @Input()
    justifyContent:string = 'center';
  
    tags?:Tag[];
    constructor(private foodService:FoodService) { }
  
    ngOnInit(): void {
      if(!this.foodPageTags)
       this.tags = this.foodService.getAllTags();
    }
  }  