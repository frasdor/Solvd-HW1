class ProductCalculator {
    constructor(products) {
            if (!Array.isArray(products)) {
                throw new Error('Products must be an array');
            }
            this.products = products;
        }

    calculateDiscountedPrice (discount) {
        if (typeof discount !== 'number') {
            throw new Error('Discount must be a number');
        }

        return this.products.map(product => ({
            name: product.name,
            price: product.price - ( product.price * discount /100)
        }));
    }

    calculateTotalPrice () {
        if (!this.products.every(p => typeof p.price === 'number')) {
            throw new Error('Invalid product structure');
            }
        
        return this.products.reduce((sum ,product) => 
            sum + product.price,0);    
    }
}

const products = [
  { name: "Phone", price: 1500 },
  { name: "Headphones", price: 300 }
];
const calculator = new ProductCalculator(products);
const discountedProducts = calculator.calculateDiscountedPrice(20);
console.log(discountedProducts);
console.log(calculator.calculateTotalPrice());
const discountedCalculator = new ProductCalculator(discountedProducts);
console.log(discountedCalculator.calculateTotalPrice());