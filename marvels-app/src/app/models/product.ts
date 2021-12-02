export class Product {
    public id: number;
    public name: string;
    public category: string;
    public price: number;
    public image: string;

    constructor(id: number = 0, 
        name: string ='', 
        category: string = '', 
        price: number = 0, 
        image: string=''){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
    }
}