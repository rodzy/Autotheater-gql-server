import { ProductClassification } from "../entities/ProductClassification";
import { ProductClassificationData } from "../../data/ProductClassification.data";
import { Orm } from "../types/Orm";

const ProductClassificationPopulate = async (orm: Orm) => {
    ProductClassificationData.map((item) => {
        const pc = new ProductClassification(
            item.type,
            item.description,
            item.addePrice
        );
        orm.orm.em.persist(pc);
    });
    await orm.orm.em.flush();
};

export default ProductClassificationPopulate;
