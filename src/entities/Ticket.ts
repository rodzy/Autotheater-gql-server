import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Ticket {
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
    pricing!: number;

    @Property({ default: true })
    status!: boolean;

    constructor(
        name: string,
        description: string,
        pricing: number,
        status: boolean
    ) {
        this.name = name;
        this.description = description;
        this.pricing = pricing;
        this.status = status;
    }
}
