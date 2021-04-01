import { Query } from "@interfaces";
const getQuerysFilter = (query) => {
  let querys: Query = {};
  for (let q of Object.keys(query)) {
    if (q === "nm") {
      querys = { ...querys, name: { $regex: query[q], $options: "i" } };
    }
    if (q === "min") {
      querys = { ...querys, price: { $gte: query[q] } };
    }
    if (q === "max") {
      querys = { ...querys, price: { ...querys.price, $lte: query[q] } };
    }
  }
  return querys;
};

export { getQuerysFilter };
