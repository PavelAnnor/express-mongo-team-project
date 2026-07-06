import Product from "../models/product.js";

// Create function (createProduct)
export async function createListing(req, res) {
    const result = await Product.find({}).limit(10)
    res.json(result)
}

// Read All function (getProducts)
export async function getListings(req, res) {}

// Read One function (getProductById)
export async function getProductById(req, res) {}

// Update function (updateProduct)
export async function updateProduct(req, res) {}

// Delete function (deleteProduct)
export async function deleteProduct(req, res) {
  const result = await Product.findByIdAndDelete(req.params.id);
  res.json(result);
}
