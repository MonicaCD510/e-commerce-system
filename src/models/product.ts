export class Product {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  displayDetails() {
    console.log(`Product: ${this.title} - Price: $${this.price}`);
  }
}