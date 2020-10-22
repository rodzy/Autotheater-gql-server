import { MikroORM, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { TicketData } from "../../data/Ticket.data";
import { Ticket } from "../entities/Ticket";

const TicketPopulate = async (
    orm: MikroORM<IDatabaseDriver<Connection>>
): Promise<void> => {
    TicketData.map((item) => {
        const ticket = new Ticket(
            item.name,
            item.description,
            item.pricing,
            item.status
        );
        orm.em.persist(ticket);
    });
    await orm.em.flush();
};

export default TicketPopulate;
