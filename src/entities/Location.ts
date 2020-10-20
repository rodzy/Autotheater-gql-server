import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Int, Field } from 'type-graphql';
import { Billboard } from "./Billboard";

@ObjectType()
@Entity()
export class Location {
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
    @Property()
    location!: string;

    @Field(() => String)
    @Property()
    description!: string;

    @ManyToOne()
    billboard!: Billboard;

    constructor(location: string, description: string) {
        this.location = location;
        this.description = description;
    }
}
