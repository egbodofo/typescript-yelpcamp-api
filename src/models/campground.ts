import mongoose, { Document, Model } from 'mongoose';

export interface ICamp extends Document {
  name: string;
  price: string;
  image: string;
  description: string;
}

const campgroundSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      default: 200,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Campground = mongoose.model<ICamp>('Campground', campgroundSchema);

export default Campground;
