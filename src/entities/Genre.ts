import { ObjectType, Field, Int } from "type-graphql";
import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    ManyToMany,
} from "typeorm";
import { Movie } from "./Movie";

@ObjectType()
@Entity()
export class Genre {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date();

    @Field(() => String)
    @Column()
    name!: string;

    @Field()
    @Column({ nullable: true })
    description?: string;

    @ManyToMany(() => Movie, (movie) => movie.genres)
    movies: Movie[];

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
