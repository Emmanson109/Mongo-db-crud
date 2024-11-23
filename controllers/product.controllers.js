const product = require('../models/product.model.js');

const  getProducts = async (req,res) =>{

    try {
      const products = await product.find({});
      res.status(200).json(products);
  
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }

  const getProduct =  async (req,res) => {
    try {
     const { id } = req.params;
     const productid = await product.findById(id);
    res.status(200).json(productid);
      
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  const createProduct = async (req,res) => {
    try {
      const products = await product.create(req.body);
      res.status(200).json(products);
      
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  }

  const updateProduct =  async (req,res) =>
    {
      try {
        const {id} = req.params;
        const products = await product.findByIdAndUpdate(id, req.body);
        if(!products){
          return res.status(404).json({message:'product not found'})
        }
        const updateProduct = await product.findById(id)
        res.status(200).json(updateProduct);
    
      } catch (error) {
        res.status(500).json({message: error.message});
      }
    }

    const deleteProduct = async (req,res) => {
        try {
          const {id} = req.params;
          const productDelete = await product.findByIdAndDelete(id);
           if (!productDelete) {
            return res.status(404).json({message: 'product not found'});
           }
           res.status(200).json({message: 'product successfully deleted'});
      
        } catch (error) {
          res.status(500).json({message: error.message});
        }
      }
  
  

  module.exports = {
    getProducts, getProduct, createProduct,updateProduct,deleteProduct
  }