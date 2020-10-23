import { Genre } from "../entities/Genre";
import { GenreData } from "../../data/Genre.data";

const GenrePopulate = async (): Promise<void> => {
    GenreData.map(async (item) => {
        const genre = Genre.create(new Genre(item.name, item.description));
        await genre.save();
    });
};

export default GenrePopulate;
