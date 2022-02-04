// A mock function to mimic making an async request for data
export function fetchProduct(id = 1) {
    return fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
  }
  