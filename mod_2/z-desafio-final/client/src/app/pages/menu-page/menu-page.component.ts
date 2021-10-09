import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/types';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css'],
})
export class MenuPageComponent implements OnInit {
  foodList: Food[] = [];
  constructor(
    private foodService: FoodService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.foodService.fetchData().subscribe((data) => {
      this.foodList = data;
    });
  }

  getCategories() {
    return this.foodService.getCategories(this.foodList);
  }

  getFoodByCategory(category: string) {
    return this.foodService.getFoodByCategory(this.foodList, category);
  }

  getCartQuantity() {
    return this.cartService.count();
  }

  getCartPrice() {
    return this.cartService.price();
  }

  addToCart(food: Food) {
    this.cartService.addFood(food);
  }
}
