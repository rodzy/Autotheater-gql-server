import {
    Collection,
    Entity,
    ManyToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType, Int, Field, Float } from "type-graphql";
import { Billboard } from "./Billboard";
import { Reservation } from "./Reservation";

@ObjectType()
@Entity()
export class Ticket {
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
    @Property({ type: "text" })
    name!: string;

    @Field(() => String)
    @Property({ type: "text" })
    description!: string;

    @Field(() => Float)
    @Property({ type: "double" })
    pricing!: number;

    @Field()
    @Property({ type:"boolean", default: true })
    status!: boolean;

    @ManyToMany({ entity: () => Billboard, inversedBy: "tickets" })
    billboards = new Collection<Billboard>(this);

    @ManyToMany({ entity: () => Reservation, inversedBy: "tickets" })
    reservations = new Collection<Reservation>(this);

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
