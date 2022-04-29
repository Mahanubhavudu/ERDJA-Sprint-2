import { Product } from "./product";
export class ProductService{
public getProducts(){
    let products:Product[];
    products =[
        new Product(1,'Ball Pens', 376.34),
        new Product(2,'Scale', 99),
        new Product(3,'Pencils', 249),
        new Product(4,'Bag', 3999),
        new Product(5,'Phone', 1190000),
        new Product(6,'Earphones', 25000),
        new Product(7,'Tempered Glass', 999),
        new Product(8,'Apple Music Subscription', 999),
        new Product(9,'Macbook', 93500),
        new Product(10,'Apple TV Subscription', 1299)
    ]
    return products;
}}
