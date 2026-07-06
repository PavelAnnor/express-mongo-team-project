import Product from "../models/product.js"

// Create function (createProduct)
export async function createProduct(req, res) {

    const result = await Product.create(req.body)
    res.send(result)
    
}

// Read All function (getProducts)
export async function getAllProducts(req, res) {
  const result = await Product.find({}).limit(10);
  res.json(result);
}

// Read One function (getProductById)
export async function getProductById(req, res) {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404)
    }

    res.json(product);
  } catch (err) {
    res.status(400).json({ message: "nah stoopid", error: err.message});
  }
}

// Update function (updateProduct)
export async function updateProduct(req, res) {}

// Delete function (deleteProduct)
export async function deleteProduct(req, res) {
  const result = await Product.findByIdAndDelete(req.params.id);
  res.json(result);
}
