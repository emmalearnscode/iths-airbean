import { uid } from 'uid';

export async function fetchProducts(){
  
  const products = await import("./menu.json")
  return new Promise((resolve, reject) => {
    if (products) {
      setTimeout(() => {
        
        resolve(products.menu);
      }, (Math.random() + 0.1)*1000 );
    }else{
      reject('no products found')
    }
      
  })
 
  
}

export async function registerUser(name, email){
  // Resolve a random generated ID after a random timer
  // Persist user in localStorage
  const id = uid()
  const user = {name, email, id}
  localStorage.setItem('user', JSON.stringify(user))

  return new Promise((resolve) => {
    setTimeout(() => {
        
      resolve(user);
    }, (Math.random() + 0.1)*1000 );
  })
}

export function userExists(){
  return localStorage.getItem('user')
}
  


// export async function makeOrder(userId, cardItems){
//   // Resolve with a orderId, order total price and ETA after a random timer
//   // Persist order coupled userId in an array in localStorage
// }

// export async function fetchOrderHistory(userId){
//   // Resolve an array of orders after a random timer
// }