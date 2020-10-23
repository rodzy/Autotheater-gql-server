import { TicketData } from "../../data/Ticket.data";
import { Ticket } from "../entities/Ticket";

const TicketPopulate = async (): Promise<void> => {
    TicketData.map(async (item) => {
        const ticket = Ticket.create(
            new Ticket(item.name, item.description, item.pricing, item.status)
        );
        await ticket.save();
    });
};

export default TicketPopulate;
