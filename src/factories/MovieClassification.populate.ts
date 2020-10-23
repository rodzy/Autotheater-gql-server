import { MovieClassificationData } from "../../data/MovieClassification.data";
import { MovieClassification } from "../entities/MovieClassification";

const MovieClassificationPopulate = async (): Promise<void> => {
    MovieClassificationData.map(async (item) => {
        const mc = MovieClassification.create(
            new MovieClassification(item.type, item.description)
        );
        await mc.save();
    });
};

export default MovieClassificationPopulate;
