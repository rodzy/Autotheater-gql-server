import { ObjectType, Int, Field } from "type-graphql";
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    OneToMany,
} from "typeorm";
import { Billboard } from "./Billboard";

@ObjectType()
@Entity()
export class Location {
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
    location!: string;

    @Field(() => String)
    @Column()
    description!: string;

    @OneToMany(() => Billboard, (billboard) => billboard.location)
    billboards: Billboard[];

    constructor(location: string, description: string) {
        this.location = location;
        this.description = description;
    }
}
