import {
    Collection,
    Entity,
    ManyToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType, Field, Int } from "type-graphql";
import { Movie } from "./Movie";

@ObjectType()
@Entity()
export class Genre {
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
    @Property({ type: "text" })
    name!: string;

    @Field()
    @Property({ type: "text", nullable: true })
    description?: string;

    @ManyToMany({ entity: () => Movie, mappedBy: "genres" })
    movies = new Collection<Movie>(this);

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
