export class Contact{
    name:string
    email:string
    phone:number
    city:string
    description:string
    product:string

    constructor(name:string, email:string, phone:number, city:string, description:string, product:string){
        this.name = name;
        this.email =email;
        this.phone = phone;
        this.city = city;
        this.description = description;
        this.product = product;
    }
}