import {
    Collection,
    Entity,
    ManyToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType } from "type-graphql";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class ProductClassification {
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property()
    type!: string;

    @Property()
    description!: string;

    @Property()
    addedPrice!: number;

    @ManyToMany({ entity: () => Product, mappedBy: "classifications" })
    products = new Collection<Product>(this);

    constructor(type: string, description: string, addePrice: number) {
        this.type = type;
        this.description = description;
        this.addedPrice = addePrice;
    }
}
