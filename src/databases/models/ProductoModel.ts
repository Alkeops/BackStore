import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      unique: true,
      default: null,
    },
    price: {
      type: Number,
      required: true,
      default: null,
    },
    thumbnail: {
      type: String,
      required: false,
      default: null,
    },
    description: {
      type: String,
      required: false,
      default: null,
    },
    stock: { type: Number, required: true, default: null },
    code: { type: String, required: true, default: () => `CODE-${Date.now()}` },
  },
  {
    timestamps: true,
  }
);

export const ProductoModel = mongoose.model(
  "Producto",
  productoSchema,
  "Producto"
);
