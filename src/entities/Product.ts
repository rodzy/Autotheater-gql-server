import {
    Collection,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType } from "type-graphql";
import { Reservation } from "./Reservation";
import { OneToMany } from "@mikro-orm/core";
import { ProductRating } from "./ProductRating";
import { ProductClassification } from "./ProductClassification";
import { ProductType } from "./ProductType";

@ObjectType()
@Entity()
export class Product {
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property()
    name!: string;

    @Property()
    description!: string;

    @Property()
    price!: number;
    
    @Property({ type: "boolean", default: true })
    status!: boolean;
    
    @ManyToOne()
    type!: ProductType;

    @ManyToMany({ entity: () => Reservation, inversedBy: "products" })
    reservations = new Collection<Reservation>(this);

    @OneToMany({ entity: () => ProductRating, mappedBy: "product" })
    ratings = new Collection<ProductRating>(this);

    @ManyToMany({ entity: () => ProductClassification, inversedBy: "products" })
    classifications = new Collection<ProductClassification>(this);

    constructor(
        name: string,
        description: string,
        price: number,
        status: boolean
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.status = status;
    }
}
