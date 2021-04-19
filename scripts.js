import STORE from "./assets/scripts/app/store.js";
import Home from "./assets/scripts/pages/Home.js"
import ProductServices from "./assets/scripts/services/product_services.js";

async function init() {
  const home = new Home('.js-app', 'all');
  try {
    const products = new ProductServices();
    STORE.loading = true;
    home.render();
    STORE.products = await products.list();
    STORE.categories = [ 'all', ...new Set(STORE.products.map(product => product.category))];
    STORE.searchProducts = null;
    STORE.loading = false;
    home.render();
  } catch (error) {
    //
  }
}

init()