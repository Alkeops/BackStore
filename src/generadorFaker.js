const faker = require("faker");
const { isWhiteSpaceSingleLine } = require("typescript");

faker.locale = "es_MX";

const get = () => ({
  price: faker.commerce.price(),
  thumbnail: faker.image.imageUrl(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  stock: faker.datatype.number(100),
  code: faker.datatype.uuid(),
});

const generate = (quantity) => {
  if (!quantity) return null;

  let response = [];
  while (quantity) {
    response.push(get());
    quantity--;
  }
  return response;
};

module.exports = {
  get,
  generate,
};
