import CartProduct from './cart-product';
import {Product} from './product';


describe('CartProduct Model', () => {
    let image = 'bag.png'
    let id = 1
    let productName = 'bag'
    let productDescription = 'dummybag'
    let price = 100;
    let quantity = 5
    let isPlaceOrder = true;
    let product = new Product(id, productName, productDescription, price , image)

  it('should be created', () => {
    let cartProduct = new CartProduct(product, quantity, isPlaceOrder)

    expect(cartProduct.getId()).toBe(1);
    expect(cartProduct.getImage()).toBe('bag.png')
    expect(cartProduct.getName()).toBe(productName)
    expect(cartProduct.getDescription()).toBe(productDescription)
    expect(cartProduct.getPrice()).toBe(price)
    expect(cartProduct.getQuantity()).toBe(quantity)
    expect(cartProduct.getIsPlaceOrder()).toBeTruthy()
  });

  it('test setter', () => {
    let cartProduct = new CartProduct(product, quantity, isPlaceOrder)

    cartProduct.setIsPlaceOrder(false)
    cartProduct.setQuantity(10)

    expect(cartProduct.getQuantity()).toBe(10)
    expect(cartProduct.getIsPlaceOrder()).toBeFalsy()
  })
});
