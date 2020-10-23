import { RoleData } from "../../data/Role.data";
import { Role } from "../entities/Role";

const RolePopulate = async (): Promise<void> => {
    RoleData.map(async (item) => {
        const role = Role.create(new Role(item.name, item.description));
        await role.save();
    });
};

export default RolePopulate;
