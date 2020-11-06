import { Arg, Mutation, Resolver } from "type-graphql";
import { UserResponse } from "../inputs/user/response";
import { UserInputs } from "../inputs/user/userInputs";
import { User } from "../entities/User";

@Resolver()
export class UserResolver {
    @Mutation(() => UserResponse)
    async register(@Arg("options") options: UserInputs): Promise<UserResponse> {
        if (options.username.length <= 1) {
            return {
                errors: [
                    {
                        field: "username",
                        message:
                            "The name for the user is required and must be more than one character",
                    },
                ],
            };
        }
        if (options.password.length <= 5) {
            return {
                errors: [
                    {
                        field: "password",
                        message:"The password must be greater than five character"
                    }
                ]
            }
        }
        
        const user = await User.create(options).save();
        return { user };
    }
}
