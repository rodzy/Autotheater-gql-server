import {
    Collection,
    Entity,
    OneToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType, Field, Int } from "type-graphql";
import { Movie } from "./Movie";

@ObjectType()
@Entity()
export class MovieClassification {
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
    type!: string;

    @Field(() => String)
    @Property()
    description!: string;

    @OneToMany({ entity: () => Movie, mappedBy: "classification" })
    movies = new Collection<Movie>(this);

    constructor(type: string, description: string) {
        this.type = type;
        this.description = description;
    }
}
