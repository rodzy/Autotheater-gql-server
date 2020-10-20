import {
    Collection,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType } from "type-graphql";
import { Movie } from "./Movie";
import { Ticket } from "./Ticket";
import { Location } from "./Location";

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

    @OneToMany({ entity: () => Movie, mappedBy: "billboard" })
    movies = new Collection<Movie>(this);

    @ManyToMany({ entity: () => Ticket, mappedBy: "billboards" })
    tickets = new Collection<Ticket>(this);

    @OneToMany({ entity: () => Location, mappedBy: "billboard" })
    locations = new Collection<Location>(this);

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
