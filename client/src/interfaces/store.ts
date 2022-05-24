export interface IProduct {
    productId: string;
    name: string;
    description: string;
    imageLink: string;
    price: number;
    stock: number;
}

export interface IProductResponse {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    stock: number;
}
