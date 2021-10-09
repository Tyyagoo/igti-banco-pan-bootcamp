import { Injectable } from '@angular/core';
import { Food } from 'src/app/types';

type FoodWrapper = {
  food: Food;
  quantity: number;
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: { [key: string]: FoodWrapper } = {};
  constructor() {}

  addFood(food: Food) {
    let desc = food.description;
    if (this.cart[desc] == undefined) {
      this.cart[desc] = { food, quantity: 0 };
    }
    this.cart[desc].quantity++;
  }

  count() {
    let count = 0;
    for (let key in this.cart) {
      count += this.cart[key].quantity;
    }
    return count;
  }

  price() {
    let price = 0;
    for (let key in this.cart) {
      price += this.cart[key].food.price * this.cart[key].quantity;
    }
    return price;
  }

  getList() {
    let arr: FoodWrapper[] = [];
    for (let key in this.cart) {
      arr.push(this.cart[key]);
    }
    return arr;
  }

  clear() {
    this.cart = {};
  }
}
