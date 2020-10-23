import { ObjectType, Int, Field } from "type-graphql";
import { Movie } from "./Movie";
import {
    BaseEntity,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class MovieRating extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn()
    createdAt = new Date();

    @UpdateDateColumn()
    updatedAt = new Date();

    @ManyToOne(() => Movie, (movie) => movie.ratings)
    movie!: Movie;

    constructor() {
        super();
    }
}
