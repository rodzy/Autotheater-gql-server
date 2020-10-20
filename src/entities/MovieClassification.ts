import {
    Collection,
    Entity,
    OneToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType } from "type-graphql";
import { Movie } from "./Movie";

@ObjectType()
@Entity()
export class MovieClassification {
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property()
    type!: string;

    @Property()
    description!: string;

    @OneToMany({ entity: () => Movie, mappedBy: "classification" })
    movies = new Collection<Movie>(this);

    constructor(type: string, description: string) {
        this.type = type;
        this.description = description;
    }
}
