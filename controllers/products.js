import Product from "../models/product.js"
import { ObjectId } from "mongoose";


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
    console.log("we got here")

    if (!product) {
      return res.status(404)
    }

    res.json(product);
  } catch (err) {
    res.status(400).json({ message: "nah stoopid", error: err.message});
  }
}

// Update function (updateProduct)
export async function updateProduct(req, res) {
    try {
        const result = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        
        if (!result) {
            return res.status(404).json({ error: "Product not found" });
        }
        
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete function (deleteProduct)
export async function deleteProduct(req, res) {
  const result = await Product.findByIdAndDelete(req.params.id);
  res.json(result);
}
