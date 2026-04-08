export async function getProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return data.products;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}