import { getProducts } from "./services/apiService";

async function run() {
  const products = await getProducts();
  console.log(products);
}

run();