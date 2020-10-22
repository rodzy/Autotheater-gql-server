import { ObjectType, Field, Int } from "type-graphql";
import { Movie } from "./Movie";
import { Ticket } from "./Ticket";
import { Location } from "./Location";
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    ManyToMany,
} from "typeorm";

@ObjectType()
@Entity()
export class Billboard {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date();

    @Field(() => String)
    @Column()
    date_now = new Date();

    @Field(() => String)
    @Column()
    show_date!: Date;

    @Field()
    @Column({ default: true })
    status!: boolean;

    @Field(() => Int)
    @Column()
    capacity!: number;

    @ManyToOne(() => Movie, (movie) => movie.billboards)
    movie!: Movie;

    @ManyToMany(() => Ticket, (ticket) => ticket.billboards)
    tickets: Ticket[];

    @ManyToOne(() => Location, (location) => location.billboards)
    location!: Location;

    constructor(
        dateNow: Date,
        showDate: Date,
        status: boolean,
        capacity: number
    ) {
        this.date_now = dateNow;
        this.show_date = showDate;
        this.status = status;
        this.capacity = capacity;
    }
}
