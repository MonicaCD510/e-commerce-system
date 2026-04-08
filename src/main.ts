import { getProducts } from "./services/apiService";

async function run() {
  const products = await getProducts();

console.log(products[0]);
console.log(products[0].title);
console.log(products[0].price);

}run();