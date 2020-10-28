import { Field, InputType } from "type-graphql";
import { MovieClassification } from "../../entities/MovieClassification";

@InputType()
export class MovieInputs {
    @Field()
    name: string;

    @Field()
    synopsis: string;

    @Field()
    image_url: string;

    @Field()
    banner_url: string;

    @Field()
    status: boolean;

    @Field()
    classification: MovieClassification;
}
