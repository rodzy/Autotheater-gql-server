type ProductClassification = {
    type: string;
    description: string;
    addePrice: number;
}[];

export const ProductClassificationData: ProductClassification = [
    {
        type: "Kids size",
        description: "The standard size for most under age of 10",
        addePrice: 5,
    },
    {
        type: "Small size",
        description: "An small portion but still powerfull",
        addePrice: 10,
    },
    {
        type: "Medium size",
        description: "The way to go for any normal person",
        addePrice: 13,
    },
    {
        type: "Large size",
        description: "Great for sharing with your loving ones",
        addePrice: 20,
    },
];
