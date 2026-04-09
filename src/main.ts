import { getProducts } from "./services/apiService";
import { Product } from "./models/product";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";

async function run() {
  const products = await getProducts();
   const productObjects = products.map((product: any) => {
    return new Product(product.title, product.price);
  });

  productObjects.forEach((product: Product) => {
    product.displayDetails();

    const discountAmount = calculateDiscount(product.price, 10);
    console.log("Discount Amount:", discountAmount);

    const taxAmount = calculateTax(product.price, "beauty");
    console.log("Tax Amount:", taxAmount);
  });
}

  // OLD CODE (kept for reference)
  // console.log(products[0]);
  // console.log(products[0].title);
  // console.log(products[0].price);

  
//   products.forEach((product: any) => {
//   if (product.price > 500) {
//     console.log(`Product: ${product.title} - Price: $${product.price}`);
//   }
// });

// let count = 0;

// products.forEach((product: any) => {
//   if (product.price > 500) {
//     console.log(`Product: ${product.title} - Price: $${product.price}`);
//     count++;
//   }
// });

// console.log("Total products over $500:", count);

// const expensiveProducts = Product.filter((product: any) => {
//   return product.price > 500;
// });

// expensiveProducts.forEach((product: any) => {
//   console.log(`Product: ${product.title} - Price: $${product.price}`);
// });

// console.log("Total:", expensiveProducts.length);



run();
