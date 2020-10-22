import { Location } from "../entities/Location";
import { LocationData } from "../../data/Location.data";
import { MikroORM, IDatabaseDriver, Connection } from "@mikro-orm/core";

const LocationPopulate = async (orm: MikroORM<IDatabaseDriver<Connection>>): Promise<void> => {
    LocationData.map((item) => {
        const location = new Location(item.location, item.description);
        orm.em.persist(location);
    });
    await orm.em.flush();
};

export default LocationPopulate;
