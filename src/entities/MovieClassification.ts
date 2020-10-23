import { ObjectType, Field, Int } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Movie } from "./Movie";

@ObjectType()
@Entity()
export class MovieClassification extends BaseEntity {
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
    type!: string;

    @Field(() => String)
    @Column()
    description!: string;

    @OneToMany(() => Movie, (movie) => movie.classification)
    movies: Movie[];

    constructor(type: string, description: string) {
        super();
        this.type = type;
        this.description = description;
    }
}
