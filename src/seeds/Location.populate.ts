import { Location } from "../entities/Location";
import { Orm } from "../types/Orm";

const LocationPopulate = async (orm: Orm) => {
    const location1 = new Location(
        "Alajuela-East",
        "300mts east from the Central Park, next to Banco Nacional"
    );
    const location2 = new Location(
        "Alajuela-West",
        "From La Agonía Church, 500mts north contiguous to Pizzería La Piña"
    );

    await orm.orm.em.persistAndFlush([location1, location2]);
};

export default LocationPopulate;
