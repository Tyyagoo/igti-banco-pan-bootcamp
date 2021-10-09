import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from 'src/app/types';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private fetcher: HttpClient) {}

  fetchData() {
    return this.fetcher.get<Food[]>(`${BASE_URL}/menu`);
  }

  getCategories(foodList: Food[]) {
    return [...new Set(foodList.map((v) => v.category))];
  }

  getFoodByCategory(foodList: Food[], category: string) {
    return foodList.filter((f) => f.category === category);
  }
}
