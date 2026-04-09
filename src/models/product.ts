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

  getPriceWithDiscount(discount: number): number {
  const discountAmount = this.price * (discount / 100);
  return this.price - discountAmount;
}}