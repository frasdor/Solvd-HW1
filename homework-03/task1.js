const products = [
  { name: "Phone", price: 1500 },
  { name: "Headphones", price: 300 }
];

function calculateDiscountedPrice (products, discount) {
    return products.map(product => {
        return {
        name: product.name,
        price: product.price - ( product.price * discount /100)
    };
 }); 
}

function calculateTotalPrice (products) {
    let totalPrice = products.reduce((sum ,product) => {
        return sum + product.price;
    }, 0);
    return totalPrice;
}


const discountedProducts = calculateDiscountedPrice(products, 20);
console.log(discountedProducts);

console.log(calculateTotalPrice(products)); 
console.log(calculateTotalPrice(discountedProducts));