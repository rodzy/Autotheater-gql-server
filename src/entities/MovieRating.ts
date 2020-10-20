import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Int, Field } from 'type-graphql';
import { Movie } from "./Movie";

@ObjectType()
@Entity()
export class MovieRating {
    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @ManyToOne()
    movie!: Movie;
}
