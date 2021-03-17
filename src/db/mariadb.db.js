export const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "productos",
  },
});

knex.schema
  .createTable("productos", (table) => {
    table.string("id");
    table.string("name");
    table.integer("price");
    table.string("thumbnail");
    table.string("description");
    table.integer("stock");
    table.integer("timestamp");
    table.string("code");
  })
  .then(() => console.log("table created"))
  .catch((err) => console.log(err))
  .finally(() => knex.destroy());
