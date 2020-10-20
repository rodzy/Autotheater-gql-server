import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Movie {
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property()
    name!: string;

    @Property({ type: "text" })
    synopsis!: string;

    @Property()
    image_url!: string;

    @Property()
    banner_url!: string;

    @Property({ type: "boolean", default: true })
    status!: boolean;

    constructor(
        name: string,
        synopsis: string,
        imageUrl: string,
        bannerUrl: string,
        status: boolean
    ) {
        this.name = name;
        this.synopsis = synopsis;
        this.image_url = imageUrl;
        this.banner_url = bannerUrl;
        this.status = status;
    }
}
