const product = { name: 'Наушники', price: 5000 };

function showProduct(discount, city) {
  const finalPrice = this.price - this.price * discount / 100;
  console.log(this.name, finalPrice, city);
}

showProduct.call(product, 10, 'Москва');
showProduct.apply(product, [10, 'Москва']);
