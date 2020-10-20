import {
    Collection,
    Entity,
    OneToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType, Field, Int } from 'type-graphql';
import { Product } from "./Product";

@ObjectType()
@Entity()
export class ProductType {
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
    name!: string;

    @Field(() => String)
    @Property({ type: "text" })
    description!: string;

    @OneToMany({ entity: () => Product, mappedBy: "type" })
    products = new Collection<Product>(this);

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
