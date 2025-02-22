import { ProductClassification } from "../entities/ProductClassification";
import { ProductClassificationData } from "../../data/ProductClassification.data";

const productClassificationPopulate = async (): Promise<void> => {
    ProductClassificationData.map(async (item) => {
        const pc = ProductClassification.create(
            new ProductClassification(
                item.type,
                item.description,
                item.addePrice
            )
        );
        await pc.save();
    });
};

export default productClassificationPopulate;
