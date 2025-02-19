export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    images: string[];
    kaspiLink: string;
    category: string;
    likes: number;
}

export interface Category {
    id: number;
    name: string;
    products: Product[];
}