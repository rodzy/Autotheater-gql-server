import { MikroORM, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { ProductType } from "../entities/ProductType";
import { ProductTypeData } from "../../data/ProductType.data";

const ProductTypePopulate = async (
    orm: MikroORM<IDatabaseDriver<Connection>>
) => {
    ProductTypeData.map((item) => {
        const productType = new ProductType(item.name, item.description);
        orm.em.persist(productType);
    });
    await orm.em.flush();
};

export default ProductTypePopulate;
