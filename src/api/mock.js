

export async function fetchProducts(){
  
  const products = await import("./menu.json")
  setTimeout(() => {
    console.log(products.menu);
    return products.menu;
  }, 2000);
 
  
}

// export async function registerUser(name, email){
//   // Resolve a random generated ID after a random timer
//   // Persist user in localStorage
// }

// export async function makeOrder(userId, cardItems){
//   // Resolve with a orderId, order total price and ETA after a random timer
//   // Persist order coupled userId in an array in localStorage
// }

// export async function fetchOrderHistory(userId){
//   // Resolve an array of orders after a random timer
// }