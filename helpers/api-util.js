export async function getAllProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}

export async function getProductById(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
}
