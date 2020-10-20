import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType } from "type-graphql";

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
