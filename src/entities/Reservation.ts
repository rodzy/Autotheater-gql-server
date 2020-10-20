import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType } from "type-graphql";

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

    constructor(tax: number, total: number, status: boolean) {
        this.tax = tax;
        this.total = total;
        this.status = status;
    }
}
