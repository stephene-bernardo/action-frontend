export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;

    constructor(id:number, name:string, description:string, price: number, image: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    getId() : number{
        return this.id;
    }

    getName(): string{
        return this.name;
    }

    getDescription(): string{
        return this.description;
    }

    getPrice(): number {
        return this.price
    }

    getImage(): string {
        return this.image;
    }
}