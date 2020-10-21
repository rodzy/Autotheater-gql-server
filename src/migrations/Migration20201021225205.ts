import { Migration } from '@mikro-orm/migrations';

export class Migration20201021225205 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "ticket" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null, "description" text not null, "pricing" double precision not null, "status" bool not null default true);');

    this.addSql('create table "product_type" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null, "description" text not null);');

    this.addSql('create table "product" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null, "description" text not null, "price" double precision not null, "status" bool not null default true, "type_id" int4 not null);');

    this.addSql('create table "product_rating" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "product_id" int4 not null);');

    this.addSql('create table "product_classification" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "type" text not null, "description" text not null, "added_price" double precision not null);');

    this.addSql('create table "product_classifications" ("product_id" int4 not null, "product_classification_id" int4 not null);');
    this.addSql('alter table "product_classifications" add constraint "product_classifications_pkey" primary key ("product_id", "product_classification_id");');

    this.addSql('create table "movie_classification" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "type" text not null, "description" text not null);');

    this.addSql('create table "movie" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null, "synopsis" text not null, "image_url" text not null, "banner_url" text not null, "status" bool not null default true, "classification_id" int4 not null);');

    this.addSql('create table "movie_rating" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "movie_id" int4 not null);');

    this.addSql('create table "location" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "location" text not null, "description" text not null);');

    this.addSql('create table "billboard" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "date_now" timestamptz(0) not null, "show_date" timestamptz(0) not null, "status" bool not null default true, "capacity" int4 not null, "movie_id" int4 not null, "location_id" int4 not null);');

    this.addSql('create table "ticket_billboards" ("ticket_id" int4 not null, "billboard_id" int4 not null);');
    this.addSql('alter table "ticket_billboards" add constraint "ticket_billboards_pkey" primary key ("ticket_id", "billboard_id");');

    this.addSql('create table "genre" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null, "description" text null);');

    this.addSql('create table "movie_genres" ("movie_id" int4 not null, "genre_id" int4 not null);');
    this.addSql('alter table "movie_genres" add constraint "movie_genres_pkey" primary key ("movie_id", "genre_id");');

    this.addSql('create table "role" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null, "description" text null);');

    this.addSql('create table "user" ("id" serial primary key, "username" text not null, "last_name" text null, "email" text not null, "password" text not null, "status" bool not null default true, "role_id" int4 not null);');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');

    this.addSql('create table "reservation" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "date_now" timestamptz(0) not null, "tax" jsonb not null, "total" double precision not null, "status" bool not null default true, "user_id" int4 not null);');

    this.addSql('create table "product_reservations" ("product_id" int4 not null, "reservation_id" int4 not null);');
    this.addSql('alter table "product_reservations" add constraint "product_reservations_pkey" primary key ("product_id", "reservation_id");');

    this.addSql('create table "ticket_reservations" ("ticket_id" int4 not null, "reservation_id" int4 not null);');
    this.addSql('alter table "ticket_reservations" add constraint "ticket_reservations_pkey" primary key ("ticket_id", "reservation_id");');

    this.addSql('alter table "product" add constraint "product_type_id_foreign" foreign key ("type_id") references "product_type" ("id") on update cascade;');

    this.addSql('alter table "product_rating" add constraint "product_rating_product_id_foreign" foreign key ("product_id") references "product" ("id") on update cascade;');

    this.addSql('alter table "product_classifications" add constraint "product_classifications_product_id_foreign" foreign key ("product_id") references "product" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "product_classifications" add constraint "product_classifications_product_classification_id_foreign" foreign key ("product_classification_id") references "product_classification" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "movie" add constraint "movie_classification_id_foreign" foreign key ("classification_id") references "movie_classification" ("id") on update cascade;');

    this.addSql('alter table "movie_rating" add constraint "movie_rating_movie_id_foreign" foreign key ("movie_id") references "movie" ("id") on update cascade;');

    this.addSql('alter table "billboard" add constraint "billboard_movie_id_foreign" foreign key ("movie_id") references "movie" ("id") on update cascade;');
    this.addSql('alter table "billboard" add constraint "billboard_location_id_foreign" foreign key ("location_id") references "location" ("id") on update cascade;');

    this.addSql('alter table "ticket_billboards" add constraint "ticket_billboards_ticket_id_foreign" foreign key ("ticket_id") references "ticket" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "ticket_billboards" add constraint "ticket_billboards_billboard_id_foreign" foreign key ("billboard_id") references "billboard" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "movie_genres" add constraint "movie_genres_movie_id_foreign" foreign key ("movie_id") references "movie" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "movie_genres" add constraint "movie_genres_genre_id_foreign" foreign key ("genre_id") references "genre" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "user" add constraint "user_role_id_foreign" foreign key ("role_id") references "role" ("id") on update cascade;');

    this.addSql('alter table "reservation" add constraint "reservation_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');

    this.addSql('alter table "product_reservations" add constraint "product_reservations_product_id_foreign" foreign key ("product_id") references "product" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "product_reservations" add constraint "product_reservations_reservation_id_foreign" foreign key ("reservation_id") references "reservation" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "ticket_reservations" add constraint "ticket_reservations_ticket_id_foreign" foreign key ("ticket_id") references "ticket" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "ticket_reservations" add constraint "ticket_reservations_reservation_id_foreign" foreign key ("reservation_id") references "reservation" ("id") on update cascade on delete cascade;');
  }

}
