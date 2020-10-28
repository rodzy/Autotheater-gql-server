import { ObjectType, Field } from "type-graphql";
import { FieldError } from "../errors/fieldErrors";
import { Movie } from "../../entities/Movie";

@ObjectType()
export class MovieResponse {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => Movie, { nullable: true })
    movie?: Movie;
}
