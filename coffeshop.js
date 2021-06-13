
class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name
    this.menu = menu
    this.orders = orders
  }

  addOrders(item) {
    const out = this.menu.find(val => val.item == item)
    if (out) {
      this.orders.push(item)
      return "item added"
    }
    else {
      return "item is unavailable"
    }
  }

  listOrder() {
    return this.orders
  }

  fulfilledOrder() {
    if (this.orders.length) {
      const fulfilled = this.orders[0]
      this.orders.shift()
      return "The " + fulfilled + " is ready"
    }
    else {
      return "All orders have been fulfilled"
    }
  }

  dueAmount() {
    const map1 = this.orders.map(val => this.menu.find(va => va.item == val))
    const map2 = map1.reduce((s, d) => s += d.price, 0)
    return map2
  }

  cheapestItem() {
    let cheapest = this.menu.reduce((p, c) => c.price < p.price ? c : p);
    return cheapest.item;
  }

  drinksOnly() {
    return this.menu.filter((drinks) => drinks.type == 'drink').map(drinks => drinks.item);
    // this menu was filter by type of drinks and to the map function and get the output
  }

  foodOnly() {
    return this.menu.filter((food) => food.type == 'food').map(food => food.item);
    // this menu was filter by type of food and to the map function and get the output
  }
}

const MyShop = new CoffeeShop(
  'Coffee Shop',
  [
    { item: 'Noodles', type: 'food', price: 40 },
    { item: 'Meals', type: 'food', price: 50 },
    { item: 'Cold coffee', type: 'drink', price: 25 },
    { item: 'Hot coffee', type: 'drink', price: 15 },
    { item: 'Milk shake', type: 'drink', price: 30 }
  ],
  []
);

console.log(MyShop.addOrders('Ice Cream'));
//   'This Item is currently unavailable'

console.log(MyShop.addOrders('Hot coffee'));
// Order added!

console.log(MyShop.listOrder());
// [ { item: 'Hot coffee', type: 'drinks', price: 10 } ]

console.log(MyShop.dueAmount());
// 10.35

console.log(MyShop.fulfilledOrder());
// The Hot coffee is ready!

console.log(MyShop.fulfilledOrder());
// All Orders have been fulfilled!

console.log(MyShop.dueAmount());
// 0

console.log(MyShop.cheapestItem());
// Hot coffee

console.log(MyShop.drinksOnly());
//  [ 'Cold coffee', 'Hot coffee', 'Milk shake' ]

console.log(MyShop.foodOnly());
