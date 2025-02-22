import { ObjectType, Field, Int, Float } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";

@ObjectType()
@Entity()
export class ProductClassification extends BaseEntity {
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
    @JoinTable()
    products: Product[];

    constructor(type: string, description: string, addePrice: number) {
        super();
        this.type = type;
        this.description = description;
        this.addedPrice = addePrice;
    }
}
