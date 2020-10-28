import { Field, InputType } from "type-graphql";
import { Role } from "../../entities/Role";

@InputType()
export class UserInputs {
    @Field()
    username: string;

    @Field()
    lastName?: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    status: boolean;

    @Field()
    role: Role;
}
