import {
    Collection,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType } from "type-graphql";
import { Ticket } from "./Ticket";
import { Product } from "./Product";
import { User } from "./User";

@ObjectType()
@Entity()
export class Reservation {
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property({ type: "date" })
    date_now = new Date();

    @Property()
    tax!: number;

    @Property()
    total!: number;

    @Property({ default: true })
    status!: boolean;

    @ManyToMany({ entity: () => Ticket, mappedBy: "reservations" })
    tickets = new Collection<Ticket>(this);

    @ManyToMany({ entity: () => Product, mappedBy: "reservations" })
    products = new Collection<Product>(this);

    @ManyToOne()
    user!: User;

    constructor(tax: number, total: number, status: boolean) {
        this.tax = tax;
        this.total = total;
        this.status = status;
    }
}
