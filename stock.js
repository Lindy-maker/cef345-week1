
const products = [
    { name: "Rice (50 kg bag)", qty: 6, minQty: 2, buy: 21000, sell: 23500 },
    { name: "Groundnut oil (1 L)", qty: 1, minQty: 6, buy: 1100, sell: 1300 },
    { name: "Sugar (1 kg)", qty: 0, minQty: 5, buy: 750, sell: 900 },
    { name: "Maggi cubes (packet)", qty: 30, minQty: 10, buy: 900, sell: 1000 }
];


const lowStock = products.filter((p) => p.qty < p.minQty);
console.log("Products to restock:");
for (const p of lowStock) {
    console.log(`- ${p.name}: ${p.qty} left`);
}

const stockValue = products.reduce((total, p) => total + (p.qty * p.buy), 0);
console.log(`Stock value at buying price: ${stockValue} XAF`);function profitPerUnit(product) {
    return product.sell - product.buy;
}

const bestProduct = products.reduce((highest, current) => {
    return profitPerUnit(current) > profitPerUnit(highest) ? current : highest;
}, products[0]);

console.log(`Highest profit per unit: ${bestProduct.name} (${profitPerUnit(bestProduct)} XAF profit per unit)`);



function getOutOfStock(items) {
    return items.filter(p => p.qty === 0);
}

const outOfStockItems = getOutOfStock(products);
console.log("\nProducts completely out of stock:");
for (const p of outOfStockItems) {
    console.log(`- ${p.name}`);
}

const stockSellingValue = products.reduce((total, p) => total + (p.qty * p.sell), 0);
const totalProfit = products.reduce((total, p) => total + (p.qty * (p.sell - p.buy)), 0);

console.log(`\nStock value at selling price: ${stockSellingValue} XAF`);
console.log(`Total profit if everything is sold: ${totalProfit} XAF`);
function profitPerUnit(product){
    return product.sellingPrice - product.buyingPrice;
}