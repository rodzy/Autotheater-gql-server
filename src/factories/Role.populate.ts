import { RoleData } from "../../data/Role.data";
import { Role } from "../entities/Role";

const rolePopulate = async (): Promise<void> => {
    RoleData.map(async (item) => {
        const role = Role.create(new Role(item.name, item.description));
        await role.save();
    });
};

export default rolePopulate;
