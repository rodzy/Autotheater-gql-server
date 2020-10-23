import { ObjectType, Field, Int, Float } from "type-graphql";
import { Ticket } from "./Ticket";
import { Product } from "./Product";
import { User } from "./User";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    ManyToOne,
    JoinTable,
    BaseEntity,
} from "typeorm";

@ObjectType()
@Entity()
export class Reservation extends BaseEntity{
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
    date_now!: Date;

    @Field(() => Int)
    @Column()
    tax!: number;

    @Field(() => Float)
    @Column()
    total!: number;

    @Field()
    @Column({ default: true })
    status!: boolean;

    @ManyToMany(() => Ticket, (ticket) => ticket.reservations)
    @JoinTable()
    tickets: Ticket[];

    @ManyToMany(() => Product, (product) => product.reservations)
    @JoinTable()
    products: Product[];

    @ManyToOne(() => User, (user) => user.reservations)
    user!: User;

    constructor(tax: number, total: number, status: boolean) {
        super();
        this.tax = tax;
        this.total = total;
        this.status = status;
    }
}
