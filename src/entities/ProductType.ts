import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType } from "type-graphql";

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

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
