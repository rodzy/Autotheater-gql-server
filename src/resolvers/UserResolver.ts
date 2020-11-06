import { Arg, Mutation, Resolver } from "type-graphql";
import { UserResponse } from "../inputs/user/response";
import { UserInputs } from "../inputs/user/userInputs";
import { User } from "../entities/User";
import { isEmailUsed } from "../middleware/isEmailUsed";
import { isEmailValid } from "../middleware/isEmailValid";

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
                        message:
                            "The password must be greater than five character",
                    },
                ],
            };
        }
        if (await isEmailUsed(options.email)) {
            return {
                errors: [
                    {
                        field: "email",
                        message: "The email is already in use",
                    },
                ],
            };
        }
        if (!isEmailValid(options.email)) {
            return {
                errors: [
                    {
                        field: "email",
                        message: `The email format is invalid, the email must match with a real email and must contain "@" and ".com"`,
                    },
                ],
            };
        }

        const user = await User.create(options).save();
        return { user };
    }
}
