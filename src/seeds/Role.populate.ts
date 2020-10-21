import { MikroORM, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { RoleData } from "../../data/Role.data";
import { Role } from "../entities/Role";

const RolePopulate = async (orm: MikroORM<IDatabaseDriver<Connection>>) => {
    RoleData.map((item) => {
        const role = new Role(item.name, item.description);
        orm.em.persist(role);
    });
    await orm.em.flush();
};

export default RolePopulate;
