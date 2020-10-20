import {
    Collection,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType, Field, Int, Float } from "type-graphql";
import { Reservation } from "./Reservation";
import { OneToMany } from "@mikro-orm/core";
import { ProductRating } from "./ProductRating";
import { ProductClassification } from "./ProductClassification";
import { ProductType } from "./ProductType";

@ObjectType()
@Entity()
export class Product {
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
    @Property()
    description!: string;

    @Field(() => Float)
    @Property()
    price!: number;

    @Field()
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
