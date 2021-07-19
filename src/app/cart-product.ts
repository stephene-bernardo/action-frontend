import { Product } from "./product";

export default class CartProduct extends Product {
    quantity:number;

    constructor(product: Product, quantity: number) {
        super(product.getId(), product.getName(), product.getDescription(), product.getPrice(), product.getImage())
        this.quantity = quantity;
    }

    setQuantity(quantity: number){
        this.quantity = quantity;
    }

    getQuantity(): number{
        return this.quantity;
    }
}