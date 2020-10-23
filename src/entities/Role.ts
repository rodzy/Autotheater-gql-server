import { ObjectType, Int, Field } from "type-graphql";
import { User } from "./User";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Role extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    name!: string;

    @Field()
    @Column({ nullable: true })
    description?: string;

    @OneToMany(() => User, (user) => user.role)
    users: User[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date();

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }
}
