import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Int, Field } from 'type-graphql';
import { Product } from "./Product";

@ObjectType()
@Entity()
export class ProductRating {
    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @ManyToOne()
    product!: Product;
}
