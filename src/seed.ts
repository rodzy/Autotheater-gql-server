import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import LocationPopulate from "./seeds/Location.populate";
import GenrePopulate from "./seeds/Genre.populate";
import ProductClassificationPopulate from "./seeds/ProductClassification.populate";
import MovieClassificationPopulate from "./seeds/MovieClassification.populate";
import ProductTypePopulate from "./seeds/ProductType.populate";

const seed = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);

    await LocationPopulate(orm);
    await GenrePopulate(orm);
    await MovieClassificationPopulate(orm);
    await ProductClassificationPopulate(orm);
    await ProductTypePopulate(orm);
};
seed();
