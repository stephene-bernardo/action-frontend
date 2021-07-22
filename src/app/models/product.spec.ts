import CartProduct from './cart-product';
import {Product} from './product';


describe('Product Model', () => {

  it('should be created', () => {
    let image = 'bag.png'
    let id = 1
    let productName = 'bag'
    let productDescription = 'dummybag'
    let price = 100;
    let product = new Product(id, productName, productDescription, price , image)

    expect(product.getId()).toBe(1);
    expect(product.getImage()).toBe('bag.png')
    expect(product.getName()).toBe(productName)
    expect(product.getDescription()).toBe(productDescription)
    expect(product.getPrice()).toBe(price)
  });
});
