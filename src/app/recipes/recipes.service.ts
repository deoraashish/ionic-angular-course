import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      name: 'Vada Pav',
      imageUrl:
        'https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x500.jpg',
      ingredients: ['Potatoes', 'Chillies', 'Garlic', 'Corn-flour', 'Bread'],
    },
    {
      id: '2',
      name: 'Pav Bhaji',
      imageUrl:
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/10/pav-bhaji-recipe-500x500.jpg',
      ingredients: [
        'Potatoes',
        'Tomatoes',
        'Chillies',
        'Garlic',
        'Corn-flour',
        'Pav',
      ],
    },
  ];
  constructor() {}

  public getAllRecipes() {
    return [...this.recipes];
  }

  public getRecipeById(id: string): Recipe {
    return {
      ...this.recipes.find((r) => {
        return r.id === id;
      }),
    };
  }

  public deleteRecipe(id: string) {
    this.recipes = this.recipes.filter((r) => {
      return r.id !== id;
    });
  }
}
