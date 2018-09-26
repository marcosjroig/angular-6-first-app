import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() id: number;

  constructor(private router: Router) { }

  ngOnInit() { }
}
