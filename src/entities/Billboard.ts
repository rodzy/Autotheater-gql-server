import {
    Collection,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType, Field, Int } from "type-graphql";
import { Movie } from "./Movie";
import { Ticket } from "./Ticket";
import { Location } from "./Location";

@ObjectType()
@Entity()
export class Billboard {
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

    @Field(() => String)
    @Property({ type: "date" })
    show_date!: string;

    @Field()
    @Property({ type: "boolean", default: true })
    status!: boolean;

    @Field(() => Int)
    @Property()
    capacity!: number;

    @ManyToOne({ entity: () => Movie })
    movie!: Movie;

    @ManyToMany({ entity: () => Ticket, mappedBy: "billboards" })
    tickets = new Collection<Ticket>(this);

    @ManyToOne({ entity: () => Location })
    location!: Location;

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
