import { ProductClassification } from "../entities/ProductClassification";
import { ProductClassificationData } from "../../data/ProductClassification.data";
import { MikroORM, IDatabaseDriver, Connection } from "@mikro-orm/core";

const ProductClassificationPopulate = async (
    orm: MikroORM<IDatabaseDriver<Connection>>
) => {
    ProductClassificationData.map((item) => {
        const pc = new ProductClassification(
            item.type,
            item.description,
            item.addePrice
        );
        orm.em.persist(pc);
    });
    await orm.em.flush();
};

export default ProductClassificationPopulate;
