import {
    Collection,
    Entity,
    OneToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType } from "type-graphql";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class ProductType {
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property()
    name!: string;

    @Property({ type: "text" })
    description!: string;

    @OneToMany({ entity: () => Product, mappedBy: "type" })
    products = new Collection<Product>(this);

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
