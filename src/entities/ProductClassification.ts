import {
    Collection,
    Entity,
    ManyToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType, Field, Int, Float } from "type-graphql";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class ProductClassification {
    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({ type: "date" })
    createdAt = new Date();

    @Field(() => String)
    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Field(() => String)
    @Property()
    type!: string;

    @Field(() => String)
    @Property()
    description!: string;

    @Field(() => Float)
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
