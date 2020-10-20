import {
    Collection,
    Entity,
    ManyToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType } from "type-graphql";
import { Billboard } from "./Billboard";

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

    @ManyToMany({ entity: () => Billboard, inversedBy: "tickets" })
    billboards = new Collection<Billboard>(this);

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
