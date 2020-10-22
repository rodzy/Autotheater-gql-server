import { ObjectType, Int, Field } from "type-graphql";
import { Reservation } from "./Reservation";
import { Role } from "./Role";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

ObjectType();
@Entity()
export class User {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    username!: string;

    @Field(() => String)
    @Column({ nullable: true })
    lastName?: string;

    @Field(() => String)
    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Field()
    @Column({ default: true })
    status!: boolean;

    @OneToMany(() => Reservation, (reservation) => reservation.user)
    reservations!: Reservation[];

    @ManyToOne(() => Role, (role) => role.users)
    role!: Role;

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date();

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
