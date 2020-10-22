import { ObjectType, Int, Field } from "type-graphql";
import { Movie } from "./Movie";
import {
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class MovieRating {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @CreateDateColumn()
    createdAt = new Date();

    @UpdateDateColumn()
    updatedAt = new Date();

    @ManyToOne(() => Movie, (movie) => movie.ratings)
    movie!: Movie;
}
