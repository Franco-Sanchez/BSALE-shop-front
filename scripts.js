// import STORE from "./assets/scripts/app/store.js";
import Home from "./assets/scripts/pages/Home.js"
// import ProductServices from "./assets/scripts/services/product_services.js";

async function init() {
  const home = new Home('.js-app');
  try {
    // const products = new ProductServices();
    // STORE.products = await products.list(); 
    home.render();
  } catch (error) {
    
  }
}

init()