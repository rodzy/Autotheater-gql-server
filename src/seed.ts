import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import LocationPopulate from "./seeds/Location.populate";
import GenrePopulate from "./seeds/Genre.populate";
import ProductClassificationPopulate from "./seeds/ProductClassification.populate";
import MovieClassificationPopulate from "./seeds/MovieClassification.populate";
import ProductTypePopulate from "./seeds/ProductType.populate";
import RolePopulate from "./seeds/Role.populate";
import TicketPopulate from "./seeds/Ticket.populate";

const seed = async () => {
    const orm = await MikroORM.init(mikroOrmConfig);

    await RolePopulate(orm);
    await LocationPopulate(orm);
    await ProductTypePopulate(orm);
    await TicketPopulate(orm);
    await ProductClassificationPopulate(orm);
    await MovieClassificationPopulate(orm);
    await GenrePopulate(orm);

    await orm.close(true);
};
seed();
