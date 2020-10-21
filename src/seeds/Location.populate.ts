import { Location } from "../entities/Location";
import { Orm } from "../types/Orm";
import { LocationData } from "../../data/Location.data";

const LocationPopulate = async (orm: Orm) => {
    LocationData.map((item) => {
        let location = new Location(item.location, item.description);
        orm.orm.em.persist(location);
    });
    await orm.orm.em.flush();
};

export default LocationPopulate;
