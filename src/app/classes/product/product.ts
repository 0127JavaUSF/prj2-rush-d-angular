export class Product {
    productJsonId: number;
    productId: number;
    productName: string;
    productPrice: number;
    productDescription: string;
    dietaryRestrictions: string;
    quantityRem: number;
    imgUrl: string;
    dessertCategory: {
        dessertJsonId: number;
        dessertCategoryId: number;
        categoryName: string;
    };
}
