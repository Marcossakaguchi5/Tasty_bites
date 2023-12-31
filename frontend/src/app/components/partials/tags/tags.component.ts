import { Component } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tags';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
tags?:Tag[];
constructor(
foodService : FoodService
){
  this.tags=foodService.getAllTags()
}
}
