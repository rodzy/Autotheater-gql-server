import { Field, Int, ObjectType } from "type-graphql";
import { Genre } from "./Genre";
import { MovieClassification } from "./MovieClassification";
import { Billboard } from "./Billboard";
import { MovieRating } from "./MovieRating";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Movie extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date();

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date();

    @Field(() => String)
    @Column()
    name!: string;

    @Field(() => String)
    @Column()
    synopsis!: string;

    @Field(() => String)
    @Column()
    image_url!: string;

    @Field(() => String)
    @Column()
    banner_url!: string;

    @Field()
    @Column({ default: true })
    status!: boolean;

    @ManyToMany(() => Genre, (genre) => genre.movies)
    genres: Genre[];

    @ManyToOne(
        () => MovieClassification,
        (movieClassification) => movieClassification.movies
    )
    classification!: MovieClassification;

    @OneToMany(() => Billboard, (billboard) => billboard.movie)
    billboards: Billboard[];

    @OneToMany(() => MovieRating, (movieRating) => movieRating.movie)
    ratings: MovieRating[];

    constructor(
        name: string,
        synopsis: string,
        imageUrl: string,
        bannerUrl: string,
        status: boolean
    ) {
        super();
        this.name = name;
        this.synopsis = synopsis;
        this.image_url = imageUrl;
        this.banner_url = bannerUrl;
        this.status = status;
    }
}
