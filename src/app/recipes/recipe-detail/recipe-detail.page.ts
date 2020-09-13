import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  public loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private altCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }
      this.loadedRecipe = this.recipeService.getRecipeById(
        paramMap.get('recipeId')
      );
    });
  }

  public onDeleteRecipe() {
    this.altCtrl
      .create({
        header: 'Are you sure?',
        message:
          'Do you want to delete the recipe? Please note that this action cannot be undone',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.recipeService.deleteRecipe(this.loadedRecipe.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alertController) => {
        alertController.present();
      });
  }
}
