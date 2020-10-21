import { Orm } from "../types/Orm";
import { Genre } from "../entities/Genre";
import { GenreData } from "../../data/Genre.data";

const GenrePopulate = async (orm: Orm) => {
    GenreData.map((item) => {
        const genre = new Genre(item.name, item.description);
        orm.orm.em.persist(genre);
    });
    orm.orm.em.flush();
};

export default GenrePopulate;
