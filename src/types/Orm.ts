import { MikroORM, IDatabaseDriver, Connection } from "@mikro-orm/core";

export type Orm = {
    orm: MikroORM<IDatabaseDriver<Connection>>
}