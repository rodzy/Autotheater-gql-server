import LocationPopulate from "./seeds/Location.populate";
import GenrePopulate from "./seeds/Genre.populate";
import ProductClassificationPopulate from "./seeds/ProductClassification.populate";
import MovieClassificationPopulate from "./seeds/MovieClassification.populate";
import ProductTypePopulate from "./seeds/ProductType.populate";
import RolePopulate from "./seeds/Role.populate";
import TicketPopulate from "./seeds/Ticket.populate";
import { createConnection } from 'typeorm';

const seed = async () => {
    await createConnection();

    await RolePopulate();
    await LocationPopulate();
    await ProductTypePopulate();
    await TicketPopulate();
    await ProductClassificationPopulate();
    await MovieClassificationPopulate();
    await GenrePopulate();

};
seed();
