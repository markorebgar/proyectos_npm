export const categoriasIniciales = async() => 
{
  var categorias = await fetch("/categoriasServidor.json");
  
  

  return categorias.json();

} 
