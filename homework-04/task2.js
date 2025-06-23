const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};

    Object.defineProperty( product, 'price', {
        writable: false,
        enumerable: false,
        configurable: true
    });
     Object.defineProperty( product, 'quantity', {
        writable: false,
        enumerable: false,
        configurable: true
    });

function getTotalPrice(obj){
    const priceDescriptor = Object.getOwnPropertyDescriptor(obj, 'price');
    const quantityDescriptor = Object.getOwnPropertyDescriptor(obj, 'quantity');

    if (priceDescriptor && quantityDescriptor) {
        const price = priceDescriptor.value;
        const quantity = quantityDescriptor.value;
        return price * quantity;
    } else {
        throw new Error('Cannot read properties "price" or "quantity"'); 
    }
}

function deleteNonConfigurable(obj, prop) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);

    if(!descriptor) {
        console.log(`The property '${prop}' does not exist.`);
        return;
    }
    if(!descriptor.configurable) {
        throw new Error (`Cannot delete the property '${prop}' because it is non_configurable.`);
    }

    delete obj[prop];
    console.log(`The property "${prop}" has been deleted.`);
}
    
console.log(getTotalPrice(product));
deleteNonConfigurable(product, 'quantity');
console.log(product);
if (Object.getOwnPropertyDescriptor(product, 'quantity')) {
    console.log(getTotalPrice(product));
} else {
    console.log('Cannot calculate total price - missing "quantity" property');
}