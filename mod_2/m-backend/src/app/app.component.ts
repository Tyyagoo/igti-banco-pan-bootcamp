import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

type Product = {
  id: number;
  nome: string;
  preco: number;
};
const BASE_URL = 'http://localhost:3000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'm-backend';
  displayedColumns = ['id', 'nome', 'preco', 'acoes'];
  products: Product[] = [];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    preco: new FormControl('5.0', Validators.required),
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    let obv = this.httpClient.get<Product[]>(`${BASE_URL}/produtos`);
    obv.subscribe((res) => {
      this.products = res;
    });
  }

  onSubmit() {
    let product = {
      nome: this.form.value.name,
      preco: this.form.value.preco,
    };
    let obv = this.httpClient.post<Product>(`${BASE_URL}/produtos`, product);
    obv.subscribe((res) => {
      this.products = [...this.products, res];
    });
    this.form.reset({
      name: '',
      preco: 5.0,
    });
  }

  remove(id: number) {
    let obv = this.httpClient.delete(`${BASE_URL}/produtos/${id}`);
    obv.subscribe((_) => {
      this.products = this.products.filter((p) => p.id !== id);
    });
  }
}
