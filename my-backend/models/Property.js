import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const propertySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  location: { type: String },
  // Add other fields as necessary
});

const Property = model('Property', propertySchema);

export default Property;
