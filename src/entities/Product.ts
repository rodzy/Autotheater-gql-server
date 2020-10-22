import { ObjectType, Field, Int, Float } from "type-graphql";
import { Reservation } from "./Reservation";
import { ProductRating } from "./ProductRating";
import { ProductClassification } from "./ProductClassification";
import { ProductType } from "./ProductType";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Product {
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
    name!: string;

    @Field(() => String)
    @Column()
    description!: string;

    @Field(() => Float)
    @Column()
    price!: number;

    @Field()
    @Column({ default: true })
    status!: boolean;

    @ManyToOne(() => ProductType, (prodcutType) => prodcutType.products)
    type!: ProductType;

    @ManyToMany(() => Reservation, (reservation) => reservation.products)
    reservations: Reservation[];

    @OneToMany(() => ProductRating, (productRating) => productRating.product)
    ratings: ProductRating[];

    @ManyToMany(
        () => ProductClassification,
        (productClassification) => productClassification.products
    )
    classifications: ProductClassification[];

    constructor(
        name: string,
        description: string,
        price: number,
        status: boolean
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.status = status;
    }
}
