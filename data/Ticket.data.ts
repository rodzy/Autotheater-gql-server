type Ticket = {
    name: string;
    description: string;
    pricing: number;
    status: boolean;
}[];

export const TicketData: Ticket = [
    {
        name: "First row",
        description: "Ticket for a normal vehicle with a spot on the front row",
        pricing: 40,
        status: true,
    },
    {
        name: "Middle row",
        description:
            "Ticket for a normal vehicle with a spot on the middle row",
        pricing: 20,
        status: true,
    },
    {
        name: "Last row",
        description: "Ticket for a normal vehicle with a spot on the last row",
        pricing: 10,
        status: true,
    },
    {
        name: "Motorbikes group",
        description: "Ticket for a spot on the motorbike group",
        pricing: 15,
        status: true,
    },
    {
        name: "On foot group",
        description: "Ticket for seats at the no-vehicle zone",
        pricing: 8,
        status: true,
    },
];
