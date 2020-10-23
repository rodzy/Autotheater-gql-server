import LocationPopulate from "./factories/Location.populate";
import GenrePopulate from "./factories/Genre.populate";
import ProductClassificationPopulate from "./factories/ProductClassification.populate";
import MovieClassificationPopulate from "./factories/MovieClassification.populate";
import ProductTypePopulate from "./factories/ProductType.populate";
import RolePopulate from "./factories/Role.populate";
import TicketPopulate from "./factories/Ticket.populate";
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
