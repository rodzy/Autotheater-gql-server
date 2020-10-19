import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Role {
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property({ type: "text" })
    name!: string;

    @Property({ type: "text", nullable: true })
    description?: string;
    
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
