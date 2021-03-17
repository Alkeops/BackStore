const productosDB = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "productos",
  },
});
productosDB.schema.hasTable("productos").then((exists) => {
  if (!exists) {
    return productosDB.schema
      .createTable("productos", (table) => {
        table.string("id");
        table.string("name");
        table.integer("price");
        table.string("thumbnail");
        table.string("description");
        table.integer("stock");
        table.biginteger("timestamp");
        table.string("code");
      })
      .then(() => console.log("table created"))
      .catch((err) => console.log(err))
      .finally(() => productosDB.destroy());
  }
});

module.exports = { productosDB };
