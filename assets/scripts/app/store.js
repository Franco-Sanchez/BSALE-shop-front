const STORE = {
  products : [],
  categories: [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  searchProducts: null,
  loading: false
}

export default STORE;