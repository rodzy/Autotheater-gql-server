import locationPopulate from "./factories/Location.populate";
import genrePopulate from "./factories/Genre.populate";
import productClassificationPopulate from "./factories/ProductClassification.populate";
import movieClassificationPopulate from "./factories/MovieClassification.populate";
import productTypePopulate from "./factories/ProductType.populate";
import rolePopulate from "./factories/Role.populate";
import ticketPopulate from "./factories/Ticket.populate";
import { createConnection } from 'typeorm';

const seed = async () => {
    await createConnection();

    await rolePopulate();
    await locationPopulate();
    await productTypePopulate();
    await ticketPopulate();
    await productClassificationPopulate();
    await movieClassificationPopulate();
    await genrePopulate();

};
seed();
