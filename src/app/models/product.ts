import ProductRequest from "./product-request";

export class Product {
    id: number;
    name: string;
    description: string;
    highestBidPrice: number;
    highestBidderName: string;
    image: string;

    constructor(productRequest: ProductRequest){
        this.id = productRequest.product_id;
        this.name = productRequest.item_name;
        this.description = productRequest.item_description;
        this.highestBidPrice = productRequest.bid_price;
        this.highestBidderName = productRequest.bidder_name;
        this.image = productRequest.image_url;
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

    getHighestBidPrice(): number {
        return this.highestBidPrice
    }

    getHighestBidderName(): string {
        return this.highestBidderName;
    }

    getImage(): string {
        return this.image;
    }
}