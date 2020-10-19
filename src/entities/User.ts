import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType } from 'type-graphql';

ObjectType()
@Entity()
export class User{
    @PrimaryKey()
    id!: number
    
    @Property({ type: "text" })
    username!: string;

    @Property({ type: "text", nullable:true })
    lastName?: string;

    @Property({ type: "text", unique: true })
    email!: string;

    @Property({ type: "text" })
    password!: string;

    @Property({ type: "boolean", default: true })
    status!: string;

    

}