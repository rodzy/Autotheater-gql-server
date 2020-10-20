import {
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryKey,
    Property,
} from "@mikro-orm/core";
import { ObjectType } from "type-graphql";
import { Reservation } from "./Reservation";
import { Role } from "./Role";

ObjectType();
@Entity()
export class User {
    @PrimaryKey()
    id!: number;

    @Property({ type: "text" })
    username!: string;

    @Property({ type: "text", nullable: true })
    lastName?: string;

    @Property({ type: "text", unique: true })
    email!: string;

    @Property({ type: "text" })
    password!: string;

    @Property({ type: "boolean", default: true })
    status!: boolean;

    @OneToMany({ entity: () => Reservation, mappedBy: "user" })
    reservations!: Reservation;

    @ManyToOne()
    role!: Role;

    constructor(
        username: string,
        lastName: string,
        email: string,
        password: string,
        status: boolean
    ) {
        this.username = username;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.status = status;
    }
}
