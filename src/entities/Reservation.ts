import {
    Collection,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType, Field, Int, Float } from "type-graphql";
import { Ticket } from "./Ticket";
import { Product } from "./Product";
import { User } from "./User";

@ObjectType()
@Entity()
export class Reservation {
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
    @Property({ type: "date" })
    date_now = new Date();

    @Field(() => Int)
    @Property({ type: "int" })
    tax!: number;

    @Field(() => Float)
    @Property({ type: "double" })
    total!: number;

    @Field()
    @Property({ default: true })
    status!: boolean;

    @ManyToMany({ entity: () => Ticket, mappedBy: "reservations" })
    tickets = new Collection<Ticket>(this);

    @ManyToMany({ entity: () => Product, mappedBy: "reservations" })
    products = new Collection<Product>(this);

    @ManyToOne({ entity: () => User })
    user!: User;

    constructor(tax: number, total: number, status: boolean) {
        this.tax = tax;
        this.total = total;
        this.status = status;
    }
}
