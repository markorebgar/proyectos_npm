export const productosIniciales = async() => 
{
  var productos = await fetch("/productosServidor.json");
  
  

  return productos.json();

} 
