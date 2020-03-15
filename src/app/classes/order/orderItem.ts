export class OrderItem {
    orderItemsId: number;
    quantity: string;
    itemPrice: number;
    product: {
        productJsonId: number;
        productName: string;
        imgUrl: string;
    }
}