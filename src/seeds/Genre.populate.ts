import { Genre } from "../entities/Genre";
import { GenreData } from "../../data/Genre.data";
import { MikroORM, IDatabaseDriver, Connection } from "@mikro-orm/core";

const GenrePopulate = async (orm: MikroORM<IDatabaseDriver<Connection>>) => {
    GenreData.map((item) => {
        const genre = new Genre(item.name, item.description);
        orm.em.persist(genre);
    });
    orm.em.flush();
};

export default GenrePopulate;
