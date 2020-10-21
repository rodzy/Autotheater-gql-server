import { MikroORM, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { MovieClassificationData } from '../../data/MovieClassification.data';
import { MovieClassification } from '../entities/MovieClassification';

const MovieClassificationPopulate = async (
    orm: MikroORM<IDatabaseDriver<Connection>>
) => {
    MovieClassificationData.map((item) => {
        const mc = new MovieClassification(
            item.type,
            item.description,
        );
        orm.em.persist(mc);
    });
    await orm.em.flush();
};

export default MovieClassificationPopulate;
