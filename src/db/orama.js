import { create, insertMultiple } from "@orama/orama";
import products from "./dummyjson";

const orama = await create({
  schema: {
    title: "string",
    description: "string",
    price: "number",
    discountPercentage: "number",
    rating: "number",
    stock: "number",
    brand: "string",
    category: "string",
    thumbnail: "string",
    images: "string",
  },
});

await insertMultiple(orama, products);

export default orama;
