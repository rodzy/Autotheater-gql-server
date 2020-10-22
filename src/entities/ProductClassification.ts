import { ObjectType, Field, Int, Float } from "type-graphql";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class ProductClassification {
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
    type!: string;

    @Field(() => String)
    @Column()
    description!: string;

    @Field(() => Float)
    @Column()
    addedPrice!: number;

    @ManyToMany(() => Product, (product) => product.classifications)
    products: Product[];

    constructor(type: string, description: string, addePrice: number) {
        this.type = type;
        this.description = description;
        this.addedPrice = addePrice;
    }
}
