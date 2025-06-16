function calculateDiscountedPrice (products, discount) {
    return products.map(product => {
        return {
        name: product.name,
        price: product.price - ( product.price * discount /100)
    };
 }); 
}
const products = [
  { name: "Phone", price: 1500 },
  { name: "Headphones", price: 300 }
];

const discountedProducts = calculateDiscountedPrice(products, 20);
console.log(discountedProducts);