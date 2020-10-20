import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType } from "type-graphql";
import { Billboard } from "./Billboard";

@ObjectType()
@Entity()
export class Location {
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property()
    location!: string;

    @Property()
    description!: string;

    @ManyToOne()
    billboard!: Billboard;

    constructor(location: string, description: string) {
        this.location = location;
        this.description = description;
    }
}
