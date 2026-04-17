import { productosIniciales } from "@/data/productos";

let products = [...productosIniciales];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function deleteProduct(id) {
  products = products.filter((p) => p.id !== id);
}

export function addProduct(product) {
  products.push(product);
}

export function updateProduct(updatedProduct) {
  products = products.map((p) =>
    p.id === updatedProduct.id ? updatedProduct : p,
  );
}