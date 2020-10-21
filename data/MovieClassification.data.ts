type MovieClassification = {
    type: string;
    description: string;
}[];

export const MovieClassificationData: MovieClassification = [
    {
        type: "G",
        description: "General",
    },
    {
        type: "PG",
        description: "Parental guidence recommended",
    },
    {
        type: "M",
        description: "Recommended for mature audiences",
    },
    {
        type: "MA 15+",
        description:
            "Not suitable for people under 15, under 15s must be accompanied by a parent or adult guardian",
    },
    {
        type: "R 18+",
        description: "Restricted to 18 and over",
    },
];
