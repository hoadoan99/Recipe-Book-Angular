import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]= [
    new Recipe(
    'Fastfood Recipe',
    'This is a simple test Fastfood',
    'https://i.pinimg.com/originals/4c/56/15/4c5615c1bc4658ff2299ef5b339166a1.jpg'
    ),
    new Recipe(
    'Sushi Recipe',
    'This is a simple test Sushi',
    'https://ik.imagekit.io/tvlk/blog/2017/10/cach-an-sushi-1.jpg?tr=dpr-1,w-675'
    ),
    new Recipe(
    'Chicken Soup Recipe',
    'This is a simple test Chicken Soup',
    'https://www.rachaelraymag.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ4NjM3MTcwNDMxNzY0MTQ3/quick-chicken-soup-with-pasta-102044409.jpg'
    ),
  ];

  constructor() { }


  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
