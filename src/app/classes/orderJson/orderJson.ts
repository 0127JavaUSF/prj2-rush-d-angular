export class OrderJson {
orderTotal : number;
customer: CustomerJson;
orderItems : OrderItemJson[];

}


export class OrderItemJson{

    quantity : number;
    itemPrice : number ;
    product : OrderItemProductJson;

}
export class OrderItemProductJson{
    productId : number;
}

export class CustomerJson{
    custId: number;
}
