import {
    Collection,
    Entity,
    ManyToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType } from "type-graphql";
import { Movie } from "./Movie";

@ObjectType()
@Entity()
export class Genre {
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property()
    name!: string;

    @Property({ nullable: true })
    description: string;

    @ManyToMany({ entity: () => Movie, mappedBy: "genres" })
    movies = new Collection<Movie>(this);

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
