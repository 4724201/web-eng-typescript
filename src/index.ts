const productName: string = "キーボード";
const unitPrice: number = 4800;
const quantity: number = 2;
const inStock: boolean = true;

console.log(productName, unitPrice, quantity, inStock);

const subtotal = unitPrice * quantity;
const taxRate = 0.1;
const total = subtotal * (1 + taxRate);

console.log(total);

const message = `${productName}を${quantity}個購入する`;
const result = `税込合計は${total}円である`;

console.log(message);
console.log(result);