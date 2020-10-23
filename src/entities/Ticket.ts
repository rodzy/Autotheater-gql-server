import { ObjectType, Int, Field, Float } from "type-graphql";
import { Billboard } from "./Billboard";
import { Reservation } from "./Reservation";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Ticket extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    name!: string;

    @Field(() => String)
    @Column()
    description!: string;

    @Field(() => Float)
    @Column()
    pricing!: number;

    @Field()
    @Column({ default: true })
    status!: boolean;

    @ManyToMany(() => Billboard, (billboard) => billboard.tickets)
    billboards: Billboard[];

    @ManyToMany(() => Reservation, (reservation) => reservation.tickets)
    reservations: Reservation[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date();

    constructor(
        name: string,
        description: string,
        pricing: number,
        status: boolean
    ) {
        super();
        this.name = name;
        this.description = description;
        this.pricing = pricing;
        this.status = status;
    }
}
