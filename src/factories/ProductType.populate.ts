import { ProductType } from "../entities/ProductType";
import { ProductTypeData } from "../../data/ProductType.data";

const productTypePopulate = async (): Promise<void> => {
    ProductTypeData.map(async (item) => {
        const productType = ProductType.create(
            new ProductType(item.name, item.description)
        );
        await productType.save();
    });
};

export default productTypePopulate;
