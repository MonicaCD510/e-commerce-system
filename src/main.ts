import { getProducts } from "./services/apiService";

async function run() {
  const products = await getProducts();

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

const expensiveProducts = products.filter((product: any) => {
  return product.price > 500;
});

expensiveProducts.forEach((product: any) => {
  console.log(`Product: ${product.title} - Price: $${product.price}`);
});

console.log("Total:", expensiveProducts.length);

}

run();
