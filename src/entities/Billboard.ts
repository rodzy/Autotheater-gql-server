import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Billboard {
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property({ type: "date" })
    date_now = new Date();

    @Property({ type: "date" })
    show_date!: string;

    @Property({ type: "boolean", default: true })
    status!: boolean;

    @Property()
    capacity!: number;

    constructor(
        dateNow: Date,
        showDate: string,
        status: boolean,
        capacity: number
    ) {
        this.date_now = dateNow;
        this.show_date = showDate;
        this.status = status;
        this.capacity = capacity;
    }
}
