import { productosIniciales } from "@/data/productos";

let products = [...productosIniciales];

export const getProducts = async () => {
 const response = await fetch("../public/products.json");
 if (!response.ok) {
 throw new Error("Error al cargar productos");
 }
 return await response.json();
};


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