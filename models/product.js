import mongoose from "mongoose";

// Define the schema for learners.
// Mongoose will add the _id property to your schemas by default.
const productSchema = new mongoose.Schema({
    // Each property can have a type field that describdes
    // the valid data types for that field, and a
    // required field to specify whether it is required.
    body: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    permalink: String,
    author: {
        type: String,
        required: true
    },
    permalink: String,
    tags: [String],//this is like saying "tags" is an array of strings
    comments: [{ //an array of strings with a body, title and strings(refer to the database)
        body: String,
        title: String,
        author: String,
    }],
    date: {
        type: Date,
        default: new Date()
    }
})

// Compile the schema into a model and export it.
// Models are used much like classes to create instances
// of the objects that the schema describes.

//virtual property that doesn't affect the database
productSchema.virtual("hasPermalink").get(function() {
    return this.permalink ? true : false;
})

export default mongoose.model("Product", productSchema, "listingAndReviews");