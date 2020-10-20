import {
    Collection,
    Entity,
    OneToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType, Int, Field } from "type-graphql";
import { User } from "./User";

@ObjectType()
@Entity()
export class Role {
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

    @OneToMany({ entity: () => User, mappedBy: "role" })
    users = new Collection<User>(this);

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
