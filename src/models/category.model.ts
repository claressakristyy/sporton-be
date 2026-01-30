import mongoose, { Schema, Document } from "mongoose";

export interface Icategory extends Document {
  name: string;
  description: string;
  imageUrl: string;
}

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<Icategory>("Categpry", CategorySchema);
