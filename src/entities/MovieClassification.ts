import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType } from "type-graphql";

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

    constructor(type: string, description: string) {
        this.type = type;
        this.description = description;
    }
}
